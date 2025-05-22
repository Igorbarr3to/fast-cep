import { useEffect, useState } from 'react'
import axios from 'axios'

interface AddressData {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
  erro?: boolean;
}

function App() {
  const [cep, setCep] = useState('');
  const [addressData, setAddressData] = useState<AddressData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCepChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCep(event.target.value.replace(/\D/g, '')); //remove caracteres não numéricos
  }

  const fetchAddress = async (event: React.FormEvent) => {
    event.preventDefault();

    if (cep.length !== 8) {
      setError('O CEP deve ter 8 dígitos');
      setAddressData(null);
      setTimeout(() => setError(''), 3000);
      return;
    }

    setLoading(true);
    try {
      const res = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      if (res.data.erro) {
        setError('CEP não encontrado');
        setAddressData(null);
        setTimeout(() => setError(''), 3000);
      } else {
        setAddressData(res.data);
        setError('');
      }
    } catch (err) {
      setError('Erro ao buscar o CEP. Tente novamente.');
      setAddressData(null);
      setTimeout(() => setError(''), 3000);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (cep.trim() === '') {
      setTimeout(() => {
        setAddressData(null);
      }, 3000);
    }
  }, [cep]);

  return (
    <main className='flex flex-col items-center justify-center min-h-screen bg-white'>
      <header className='fixed top-0 text-center w-full  p-4 shadow-md'>
        <h1 className='text-3xl font-bold text-gray-800 mb-4'>FastCEP</h1>
        <p className='text-gray-600 mb-4'>Consulte um endereço através do CEP de forma rápida!</p>
      </header>
      <form className='flex flex-col w-max-sm bg-gray-400 p-6 rounded-lg shadow-2xl shadow-neutral-500 text-gray-800'>
        <label htmlFor='cep' className='font-semibold'>CEP (apenas números)</label>
        <input
          type='text'
          id='cep'
          name='cep'
          onChange={handleCepChange}
          value={cep}
          placeholder='Digite o CEP'
          className='border-2 bg-gray-300 border-gray-500 rounded-md p-2 m-2 focus:outline-none focus:border-gray-700'
        />

        {error && (
          <p className="my-4 text-red-600 font-mediu text-center transition duration-300">{error}</p>
        )}

        <button
          onClick={fetchAddress}
          disabled={loading}
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50" // Tailwind: estilização do botão
        >
          {loading ? 'Buscando...' : 'Consultar'}
        </button>
      </form>

      {addressData && (
        <div className="mt-6 p-4 bg-gray-200 border border-gray-400/20 rounded-md shadow-2xl text-lg">
          <h2 className="text-xl font-semibold mb-2">Endereço Encontrado:</h2>
          <p><strong>CEP:</strong> {addressData.cep}</p>
          <p><strong>Logradouro:</strong> {addressData.logradouro}</p>
          <p><strong>Complemento:</strong> {addressData.complemento || 'N/A'}</p>
          <p><strong>Bairro:</strong> {addressData.bairro}</p>
          <p><strong>Cidade:</strong> {addressData.localidade}</p>
          <p><strong>Estado:</strong> {addressData.uf}</p>
          <p><strong>IBGE:</strong> {addressData.ibge}</p>
          <p><strong>DDD:</strong> {addressData.ddd}</p>
        </div>
      )}
    </main>
  )
}

export default App

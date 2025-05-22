# FastCEP 🚀

Bem-vindo ao FastCEP! Uma aplicação web ágil e moderna para consulta de endereços brasileiros através do CEP (Código de Endereçamento Postal).

Este projeto foi desenvolvido como uma prática para o consumo de APIs, utilizando tecnologias modernas de front-end.

Link do deploy: https://fast-cep.vercel.app/

## ✨ Funcionalidades

* **Consulta de CEP:** Insira um CEP de 8 dígitos e obtenha os detalhes do endereço correspondente.
* **Exibição Detalhada:** Mostra informações como logradouro, bairro, cidade, UF, DDD e IBGE.
* **Validação de Entrada:** Verifica se o CEP inserido possui 8 dígitos numéricos.
* **Feedback Visual:** Indicador de carregamento durante a busca do CEP.
* **Tratamento de Erros Amigável:**
    * Mensagens claras para CEP não encontrado ou erros na consulta.
    * As mensagens de erro são exibidas por 3 segundos e, em seguida, o campo de CEP é limpo automaticamente.
* **Limpeza Automática de Endereço:** Se o campo de CEP for esvaziado, os dados do endereço consultado anteriormente desaparecem da tela.
* **Interface Responsiva:** Construído com Tailwind CSS para uma boa experiência em diferentes tamanhos de tela.

## 🛠️ Tecnologias Utilizadas

* **React:** Biblioteca JavaScript para construção de interfaces de usuário.
* **Vite:** Ferramenta de build moderna e rápida para desenvolvimento front-end.
* **Tailwind CSS:** Framework CSS utility-first para estilização rápida e customizável.
* **TypeScript:** Superset do JavaScript que adiciona tipagem estática.
* **Axios:** Cliente HTTP baseado em Promises para realizar chamadas à API.
* **API ViaCEP:** Utilizada como fonte para os dados de endereço.

## 🏁 Como Rodar o Projeto Localmente

Siga estas instruções para configurar e rodar o projeto em sua máquina local.

### Pré-requisitos

* [Node.js](https://nodejs.org/) (versão 18.x ou superior recomendada)
* [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/Igorbarr3to/fast-cep.git
    cd fastcep 
    ```

2.  **Instale as dependências:**
    Usando npm:
    ```bash
    npm install
    ```
    Usando pnpm:
    ```bash
    pnpm install
    ```
    Ou usando Yarn:
    ```bash
    yarn install
    ```

3.  **Inicie o servidor de desenvolvimento:**
    Usando npm:
    ```bash
    npm run dev
    ```
    Usando pnpm:
    ```bash
    pnpm install
    ```
    Ou usando Yarn:
    ```bash
    yarn dev
    ```

4.  Abra seu navegador e acesse `http://localhost:5173` (ou a porta indicada pelo Vite no seu terminal).

## 🚀 Como Usar

1.  Digite um CEP brasileiro válido (8 dígitos numéricos) no campo indicado.
2.  Clique no botão "Consultar".
3.  Se o CEP for válido e encontrado, os detalhes do endereço serão exibidos abaixo.
4.  Em caso de erro (CEP inválido, não encontrado ou falha na API), uma mensagem de erro será exibida por 3 segundos, e o campo de CEP será limpo.
5.  Se você limpar o campo de CEP manualmente, qualquer endereço exibido anteriormente desaparecerá.

Feito para praticar e aprender!

# Projeto – Demonstração Técnica Front-end (React JS)

Este projeto é uma demonstração prática para avaliação de conhecimentos em desenvolvimento Front-end utilizando React JS. Ele integra a API gratuita do TMDB (The Movie Database) para exibir um catálogo de filmes.

## Objetivo

Avaliar a familiaridade com:
- React JS (componentização, hooks (useState, useEffect), etc.)
- Integração com APIs (TMDB)
- Boas práticas de componentização e organização do código
- Uso de bibliotecas auxiliares (React Bootstrap, Styled Components, Axios)

## Especificações Técnicas

- O código segue os padrões do JavaScript ES6 (ECMAScript 6).
- Utiliza a API gratuita do [TMDB (The Movie Database)](https://developer.themoviedb.org/docs/getting-started) para consumir dados de filmes.
- Utiliza a biblioteca [React Bootstrap](https://react-bootstrap.github.io/) para garantir a responsividade das páginas.
- Utiliza a biblioteca [Styled Components](https://styled-components.com/) para estilização dos componentes.
- A estrutura e o estilo das páginas são livres – o foco está na funcionalidade e na organização do código.
- Demonstra domínio dos conceitos de componentização no React JS.
- Utiliza a biblioteca [Axios](https://axios-http.com/) para realizar as requisições à API.
- Utiliza hooks do React, como `useState` e `useEffect`.
- Realiza pelo menos uma requisição **GET** e uma **POST** utilizando a API do TMDB.


## Estrutura do Projeto

- **Páginas (src/pages):**
  - **Home:** Página inicial do projeto, com as principais tendências da semana.
  - **List:** Exibe uma listagem de filmes que são selecionadas pelo usuário.
  - **Search:** Permite a busca de filmes.
  - **Movie Details:** Exibe detalhes de um filme específico (por exemplo, título, sinopse, poster, etc.).

- **Componentes (src/components):**
  - **Header:** Um componente de cabeçalho.
  - **MovieCard:** Um componente que exibe um card de um filme.

- **Outros arquivos e diretórios:**
  - **src/routes.tsx:** Configuração das rotas.
  - **src/layout.tsx:** Basicamente um wrapper que inclui o Header.
  - **src/lib:** Configuração de libs externas, o axios no caso.
  - **src/types:** Definições de tipos (por exemplo, a tipagem dos filmes).
  - **src/styles:** Arquivos de estilização global, nesse caso o styled components.
  - **src/assets:** Imagens, ícones, etc.
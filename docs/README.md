<h1 align="center"> 🤖 Node TypeScript No Framework AI Manager 🤖 </h1>

<h2> 📖 Índice 📖 </h2>

- Descrição do Projeto  
- Objetivo do Projeto  
- Contexto  
- Tecnologias Utilizadas  
- Andamento do Projeto  
- Funcionalidades  
- Regra de Negócio  
- Conceitos Aplicados  
- Como Executar a Aplicação  
- Desafios Encontrados  
- Desenvolvedores  

---

<h2> 🖋️ Descrição do Projeto 🖋️ </h2>

> O **Node TypeScript No Framework AI Manager** é uma aplicação web back-end desenvolvida com **Node.js e TypeScript**, que disponibiliza uma **API REST** para gerenciamento e consulta de inteligências artificiais.

A aplicação permite listar e filtrar diferentes IAs com base em suas categorias e nomes, retornando os dados de forma estruturada em **JSON**.

O projeto foi construído **sem o uso de frameworks**, com o objetivo de aprofundar o entendimento do funcionamento interno de uma API REST.

---

<h2> 🎯 Objetivo do Projeto 🎯 </h2>

O principal objetivo deste projeto é desenvolver uma aplicação back-end do zero, utilizando apenas recursos nativos e bibliotecas essenciais, com foco em:

- Construção de APIs REST sem frameworks  
- Uso de TypeScript para tipagem e organização  
- Estruturação de regras de negócio  
- Manipulação de dados em formato JSON  
- Organização modular de código  

---

<h2> 🌎 Contexto 🌎 </h2>

Com o crescimento acelerado das ferramentas de inteligência artificial, tornou-se cada vez mais difícil para usuários escolherem quais soluções utilizar.

Diante desse cenário, surge a necessidade de uma aplicação capaz de:

> Organizar, listar e filtrar inteligências artificiais com base em suas funcionalidades.

O **AI Manager** atua como um agregador de informações, facilitando a descoberta de ferramentas de IA.

---

<h2> 🏗️ Arquitetura 🏗️ </h2>

Um rascunho simplificado da arquitetura do **AI Manager** pode ser consultado na pasta arch/assets/img desse repositório.

---

<h2> 🚀 Tecnologias Utilizadas 🚀</h2>

<div>

<img src="https://img.shields.io/badge/TypeScript-blue?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white">
<img src="https://img.shields.io/badge/NPM-red?style=for-the-badge&logo=npm&logoColor=white">

</div>

---

<h2> 🚧 Andamento do Projeto 🚧 </h2>

<div>

![Badge CONCLUÍDO](http://img.shields.io/static/v1?label=STATUS&message=CONCLUIDO&color=GREEn&style=for-the-badge)

</div>

---

<h2> ✨ Funcionalidades ✨ </h2>

:heavy_check_mark: Listagem de inteligências artificiais disponíveis na API  

:heavy_check_mark: Filtro de IAs por nome  

:heavy_check_mark: Filtro por categorias generativas:
- Texto  
- Imagem  
- Conteúdo  
- Mockups  
- Vídeo  
- Áudio  

:heavy_check_mark: Retorno de dados estruturados em formato JSON  

:heavy_check_mark: Arquitetura modular sem uso de frameworks  

---

<h2> 🧠 Regra de Negócio 🧠 </h2>

A aplicação segue uma lógica simples e eficiente para gerenciamento das inteligências artificiais:

### 📦 Estrutura dos Dados

Cada inteligência artificial é representada como um objeto contendo:

- Nome  
- Link de acesso  
- Logo  
- Categorias  

Exemplo:

```json
[
  {
    "AiName": "ChatGPT",
    "link": "https://chatgpt.com/",
    "logo": "https://upload.wikimedia.org/...",
    "categories": ["texto", "imagem", "conteúdo"]
  }
]
```

<h2>📡 Endpoints 📡 </h2>

✔️ GET /api/**list**

Retorna a lista completa de inteligências artificiais

✔️ GET /api/**name?n=nomedaia**

Filtra inteligências artificiais pelo nome

✔️ GET /api/**category?c=nomedacategoria**

Filtra inteligências artificiais por categoria

<h2> 📚 Conceitos Aplicados 📚 </h2>

Durante o desenvolvimento foram utilizados os seguintes conceitos:

- TypeScript e tipagem estática

- Criação de API REST sem frameworks

- Arquitetura modular (controllers, services, repositories)

- Manipulação de arquivos JSON

- Uso de query strings para filtros

- Separação de responsabilidades (SRP)

- Programação orientada a objetos

- Tratamento de erros em requisições

<h2> 💨 Como Executar a Aplicação? 💨 </h2>

1️⃣ Clone o repositório:

```bash

git clone <https://github.com/FabioLiriodev/node-ts-webapi-no-framework-ai-manager>

```

2️⃣ Acesse a pasta do projeto:

```bash

cd node-ts-webapp-no-framework-ai-manager

```

3️⃣ Instale as dependências:

```bash

npm install

```

4️⃣ Execute a aplicação:

- Versão de desenvolvimento:

```bash

npm run start:dev

```

- Versão de monitoramento:

```bash

npm run start:watch

```

ou

- Versão compilada:

```bash

node dist/server.js

```

5️⃣ Utilize ferramentas como Postman ou Insomnia para testar os endpoints da API.

<h2> 🧗‍♂️ Desafios Encontrados 🧗‍♂️ </h2>

O desenvolvimento sem frameworks trouxe desafios importantes:

- Implementar manualmente a estrutura de uma API REST

- Organizar corretamente rotas, controllers e serviços

- Trabalhar com TypeScript garantindo tipagem consistente

- Manipular e filtrar dados de forma eficiente

- Criar uma arquitetura escalável sem dependência de frameworks como Express

- Gerenciar leitura de arquivos JSON como fonte de dados

Esses desafios foram fundamentais para compreender profundamente o funcionamento interno de aplicações back-end.

<h2> 💻 Desenvolvedores 💻</h2>

<img src="https://avatars.githubusercontent.com/u/140852220?v=4" width=100><br><sub>Fábio Lirio</sub>

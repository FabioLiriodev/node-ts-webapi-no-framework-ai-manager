# 🤖 Node Typescript No FrameWork AI Manager 🤖

## 🏹 Objetivo 🏹

Criar uma aplicação web back-end com nodeJS para fazer o gerenciamento de inteligências artificiais através do uso de uma API do tipo REST.

## 📖 Descrição 📖

O Node Typescript No Framework AI Manager é uma aplicação web onde o usuário pode obter dados de inteligências artificiais de maneira dinâmica.

## 📖 Contexto 📖

As múltiplas possibilidades de inteligências artificiais disponíveis atualmente faz com que os usuários tenham dificuldade de selecionar a(s) IAs mais adequadas para a funcionalidade que desejam. Por isso, uma ferramenta que filtre as IAs por suas categoriais torna-se interessante.

## ⌨️ Features ⌨️

- Listar as inteligências artificiais disponíveis na API;
- Filtrar as inteligências artificiais por nome e por categorias generativas [texto, imagem, conteúdo, mockups, vídeo, áudio];

## 🤔 Como desenvolver o aplicativo? 🤔

### Feature

#### Como implementar?

**Feature:**

- Listar as inteligências artificiais disponíveis na API;

**Request:**

MÉTODO GET: Retorna lista de inteligências artificiais.

**Response:**

**Retornar em uma API REST (JSON)** o nome da inteligência artificial, o link de acesso, a logo e as categorias generativas, de acordo com o modelo de vetor JSON apresentado abaixo:

```js
[

{
    AiName: "ChatGPT",
    link: "https://chatgpt.com/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/3840px-OpenAI_Logo.svg.png",
    categories: ["texto", "imagem", "conteúdo"]  

},

{
    AiName: "Midjourney",
    link: "https://www.midjourney.com/home",
    logo: "https://img.icons8.com/3d-fluency/1200/midjourney.jpg",
    categories: ["imagem"]  

},

]
```
**Feature:**

- Filtrar as inteligências artificiais por nome e por categorias generativas [texto, imagem, conteúdo, mockups, vídeo, áudio];

**Request:**

MÉTODO GET: Retorna a lista filtrada de inteligências artificiais baseado em um parâmetro selecionado pelo usuário.

**Response:**

**Retornar em uma API REST (JSON)** os dados filtrados de acordo com os endpoints definidos para cada filter.




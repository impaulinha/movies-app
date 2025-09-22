<h1 align="center">
  🎞️ <a href="#" alt="Nome do Projeto">MovieDB</a> 🎞️
</h1>

<p align="center">
  <img alt="Tamanho do repositório" src="https://img.shields.io/github/repo-size/impaulinha/movies-app">
  <img alt="Licença" src="https://img.shields.io/github/license/impaulinha/movies-app">
  <img alt="Last commit" src="https://img.shields.io/github/last-commit/impaulinha/movies-app">
</p>

---

## 📑 Índice

<p align="center">
  <a href="#-sobre">📌 Sobre</a> • 
  <a href="#-layout">📸 Layout</a> • 
  <a href="#️-tecnologias">🛠️ Tecnologias</a> • 
  <a href="#-como-executar">🚀 Como executar</a> • 
  <a href="#-licença">📝 Licença</a> • 
  <a href="#-autora">👩🏻‍💻 Autora</a>
</p>

---

## 📌 Sobre

**MovieDB** é um aplicativo para explorar filmes, construído com React Native CLI. Inspirado nas interfaces dos principais serviços de streaming, o app permite que os usuários descubram novos títulos, pesquisem por filmes, vejam detalhes e gerenciem suas próprias listas de "Quero Assistir" e "Já Assisti".

Este projeto foi desenvolvido com intuito de colocar em prática habilidades em desenvolvimento mobile multiplataforma, consumo de APIs, gerenciamento de estado global e configuração de ambiente nativo.

Funcionalidades:

* 📱 **Tela Home Imersiva:**
    * Seção de destaque com um carrossel dos "Top 3" filmes populares, com ranking no estilo Netflix.
    * Múltiplas fileiras horizontais (carrosséis) para diferentes categorias: Populares, Mais Bem Avaliados, Próximos Lançamentos, etc.
* 🔍 **Busca e Exploração:**
    * Tela de busca que exibe categorias de gêneros para explorar.
    * Pesquisa de filmes em tempo real com *debounce* para otimizar as chamadas à API.
    * Navegação para uma lista de filmes completa ao selecionar uma categoria.
* 🎥 **Detalhes do Filme:**
    * Tela de detalhes completa com imagem de fundo, pôster, sinopse, nota, ano e gêneros.
    * Botões de ação para salvar o filme.
* 💾 **Listas Pessoais:**
    * Tela de "Salvos" com abas para separar as listas "Quero Assistir" e "Já Assisti".
    * Persistência de dados localmente no dispositivo usando `AsyncStorage`.
    * Sincronização de estado global com a Context API, garantindo que as listas se atualizem em tempo real em todo o app.
* ⚙️ **Configuração Nativa:**
    * Ícone e nome do aplicativo personalizados.
    * Splash Screen customizada para uma experiência de carregamento profissional.

---

## 📸 Layout

Abaixo, o layout da aplicação:

Home | Pesquisar | Categorias
:------ | :------: | ------:
<img src='https://github.com/user-attachments/assets/f12802d9-b31c-4371-aef5-1c7819bc743a' width=250/> | <img src='https://github.com/user-attachments/assets/fba87b57-61eb-4a2e-836b-e71a8c864c49' width=250/> | <img src='https://github.com/user-attachments/assets/1fbad776-a077-4e31-8f0d-07f4feb465d1' width=250/>

Salvos | Detalhes | Filmes Categoria
:------ | :------: | ------:
<img src='https://github.com/user-attachments/assets/bc94e13d-0de4-4236-9d5f-2e685e34a0e7' width=250/> | <img src='https://github.com/user-attachments/assets/245e8043-7584-4692-b26b-9ce12cbf3672' width=250/> | <img src='https://github.com/user-attachments/assets/d2350d2f-7895-43a2-9e78-615d4c5eaccd' width=250/>

---

## 🛠️ Tecnologias

As seguintes tecnologias foram utilizadas no projeto:

- [React Native CLI](https://reactnative.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [TMDB - API de filmes](https://www.themoviedb.org/)
- [AsyncStorage](https://reactnative.dev/docs/asyncstorage)

---

## 🚀 Como executar

### 📋 Pré-requisitos

É necessário que você tenha instalado em sua máquina:

- [Node](https://nodejs.org/en/)
- [JDK](https://www.oracle.com/java/technologies/downloads/)
- [Android Studio](https://developer.android.com/studio)

Você pode seguir o passo a passo disponível na [documentação](https://reactnative.dev/docs/environment-setup) do React Native, onde há instruções que vão desde a instalação dos pré-requisitos até a execução do aplicativo.

### ⚙️ Rodando o aplicativo

Se já possui todos os pré-requisitos instalados, siga os seguintes comandos:

```bash
# Clone este repositório
$ git clone https://github.com/impaulinha/movies-app.git
# Acesse a pasta do projeto no seu terminal/cmd
$ cd movies-app
# Vá para a pasta da aplicação
$ cd app
# Instale as dependências necessárias
$ npm install
# Execute a aplicação (Android)
$ npx react-native run-android

# A aplicação irá rodar no seu emulador
```
---

## 📝 Licença

Este projeto esta sob a licença [MIT](./LICENSE).

---

## 👩🏻‍💻 Autora

Feito com ❤️ e dedicação por Ana Paula 😊. Entre em contato 👇

[![Linkedin Badge](https://img.shields.io/badge/-Paulinha-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/tgmarinho/)](https://www.linkedin.com/in/anapaula-aguiar/) 
[![Gmail Badge](https://img.shields.io/badge/-anaaguiar20016@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:tgmarinho@gmail.com)](mailto:anaaguiar20016@gmail.com)


- **Ana Paula Aguiar** - *Desenvolvedora Mobile* - [impaulinha](https://github.com/impaulinha)

---

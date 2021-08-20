# QuizzBuzz

[Live site](https://quizz-buzz.netlify.app/)

A simple Quizz App, which allows users to create and join a game, select a category and respective difficulty and allow for highscores of all time to be shown which can be filtered by category and diffficulty.

## Installation & Usage

### Installation

- Clone, fork or download the repository.
- Open terminal and navigate to `React-Quizz-App` folder (repository root directory)
- For the server and database please navigate to `QuizzBuzz-Server` and run `npm install`.

### Usage

- To make requests directly to the server, use api root `http://localhost:3000/`

## Installation & Usage

### Installation

- Clone or download the repo
- Open terminal and navigate to `QuizzBuzz-Server` folder
- Navigate to the server folder and run `npm install` to install dependencies

## Technologies

<details>
  <summary><b>Client</b></summary>
  
  - HTML
  - CSS
  - JavaScript
  - NPM (Node Package Manager)
  - React
  - Redux
  - socket.io
  - Mongo Atlas
  - Material UI
  - webpack
  - babel
  - axios

</details>

<details>
  <summary><b>Server</b></summary>

- [NodeJs](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)
  - [cors](https://www.npmjs.com/package/cors)
- [socket.io](https://socket.io/)

</details>

<details>
  <summary><b>Database</b></summary>

- [Mongodb ATLAS](https://www.mongodb.com/cloud/atlas)

</details>

## API endpoints

| Route name | Path                     | Method  | Purpose                               |
| ---------- | ------------------------ | ------- | ------------------------------------- |
| show       | `/highscores/`           | `GET`   | Gets all highscores                   |
| update     | `/highscores/`           | `POST`  | Post a new highscore                  |
| update     | `/auth/:email/password`  | `PATCH` | Update account password               |
| show       | `/:category/:difficulty` | `GET`   | Get scores by difficulty and category |
| update     | `/:username`             | `GET`   | Checks if the username exists         |

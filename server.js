const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require("socket.io")(server, {
    cors: {
      origin: "http://localhost:3000/",
      methods: ["GET", "POST"]
    }
  });
const cors = require('cors');


app.use(cors());
app.use(express.json());

const highScoreRoutes = require('./controllers/highScores');

app.use('/highscores', highScoreRoutes);

app.get('/', (req, res) => {
    res.json('Welcome to the QuizzBuzz API')
});

io.on("connection", socket => {
    console.log('user connected')
    socket.on('disconnect', ()=>console.log('user disconnected'))
});

module.exports = { server };


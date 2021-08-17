const express = require('express');
const { app, io, server } = require('./initServer');
const cors = require('cors');
const { initialise } = require('./socketEvents');

app.use(cors());
app.use(express.json());

const highScoreRoutes = require('./controllers/highScores');

app.use('/highscores', highScoreRoutes);

app.get('/', (req, res) => {
    res.json('Welcome to the QuizzBuzz API')
});

io.on("connection", socket => initialise(socket));

module.exports = { server };


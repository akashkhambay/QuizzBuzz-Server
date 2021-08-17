const { GameState } = require('../models/GameState')
const { io } = require('../initServer');

function initialise(socket){
    console.log('user connected');

    socket.on('disconnect', ()=>console.log('user disconnected'));


    socket.on('create game', ({room, category, difficulty, host, questions}) => {
        console.log(`game created with the code ${room}`);
        const state = new GameState(category, difficulty, host, room, questions);
        socket.join(room);
        io.to(room).emit('init state', state); //this sends to everyone in room including sender
    })


    socket.on('join game', (room) => {
        // check if the room exists first and if not send back an error message
        console.log(`game joined with the code ${room}`);
        socket.join(room);
    })

    
    socket.on('change gameState', (state) => {
        
    })
}

module.exports = { initialise };
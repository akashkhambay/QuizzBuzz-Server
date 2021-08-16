const { GameState } = require('../models/GameState')

function initialise(socket){
    console.log('user connected');

    socket.on('disconnect', ()=>console.log('user disconnected'));


    socket.on('create game', ({room, category, difficulty, host, numQuestions}) => {
        console.log(`game created with the code ${room}`);
        const state = GameState(category, difficulty, host, numQuestions);
        socket.join(room);
        socket.to(room).emit('change state', state);
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
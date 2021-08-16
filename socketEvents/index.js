function initialise(socket){
    socket.emit('user connected')
    socket.on('disconnect', ()=>console.log('user disconnected'));
    socket.on('create game', ({code, category, difficulty}) => {
        console.log(`game created with the code ${code}`);
        socket.join(code);
    })
    socket.on('join game', (code) => {
        // check if the room exists first and if not send back an error message
        console.log(`game joined with the code ${code}`);
        socket.join(code);
    })
    socket.on('change gameState', (state) => {
        
    })
}

module.exports = { initialise };
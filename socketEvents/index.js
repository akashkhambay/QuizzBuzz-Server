function initialise(socket){
    socket.emit('user connected')
    socket.on('disconnect', ()=>console.log('user disconnected'));
}

module.exports = { initialise };
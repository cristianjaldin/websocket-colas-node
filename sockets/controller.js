

const socketController = (socket) => {

    console.log('Cliente conectado', socket.id);

    socket.on('disconnect', () => {
        console.log('Cliente desconectado');
    });

    socket.on('enviar-mensaje', (payload, callback) => {
        console.log(payload);
        const id = 123456;
        //callback({ id, fecha: new Date().getTime() });
        callback(id);
        //a todos los clientes conectados.
        //this.io.emit('enviar-mensaje', payload);
        //socket.emit('enviar-mensaje', payload);
        socket.broadcast.emit('enviar-mensaje', payload);
    })

}

module.exports = {
    socketController
}
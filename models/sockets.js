class Sockets {
    constructor(io) {
      this.io = io;
    }
    socketsEvents() {
      this.io.on('connection', (socket) => {
        //on connetion
        socket.on('mensaje-cliente', (data) => {
          console.log(data)
          //Listen to events
          this.io.emit('mensaje-server', {
            user: socket.id,
            ...data,
          });
        });
      });
    }
  }
  
  module.exports = Sockets;
  
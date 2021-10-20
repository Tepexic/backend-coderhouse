const express = require('express')
const { Server: SocketServer } = require('socket.io')
const { Server: HttpServer } = require('http')

const { getMessages, addMessage } = require('./model/messages')

const app = express()
const httpServer = new HttpServer(app)
const io = new SocketServer(httpServer)

app.use(express.static('public'))

io.on('connection',socket => {
  console.log('Un cliente se ha conectado');
  socket.emit('messages', getMessages());

  socket.on('new-message', data => {
      addMessage(data)
      socket.emit('messages', getMessages());
  });
});


const PORT = 8080
const connectedServer = httpServer.listen(PORT, () => {
  console.log(`Servidor Http con Websockets escuchando en el puerto ${connectedServer.address().port}`)
})
connectedServer.on('error', error => console.log(`Error en servidor ${error}`))
const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const { Server } = require('socket.io')
const io = new Server(server)
port = process.env.PORT || 5000


app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
})

server.listen(port, function() {
    console.log('listening on port ' + port)
})

io.on('connection', (socket) => {
    socket.on('chat message', (data) => {
      io.emit('chat message', data);
    });
});
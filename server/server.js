//require('./config/config');
const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const app = express();
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public');
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');
  socket.on('disconnect', () => {
    console.log('Disconnected');
  });
});

io.on('disconnection', (socket) => {
  console.log('User disconnected');
});

server.listen(port, () => {
  console.log(`Server has started up on port ${port}`);
});

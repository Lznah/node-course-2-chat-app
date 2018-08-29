//require('./config/config');
const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const app = express();
const port = process.env.PORT || 3000;

const {generateMessage, generateLocationMessage} = require('./utils/message');
const publicPath = path.join(__dirname, '../public');
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('newMessage', generateMessage('Admin','Welcome to the chat app'));

  socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));

  socket.on('createMessage', (data, callback) => {
    console.log('Recieved message', data);
    io.emit('newMessage', generateMessage(data.from, data.text));
    callback('This is from the server');
  });

  socket.on('createLocationMessage', (coords) => {
    io.emit('newLocationMessage', generateLocationMessage('Admin', coords.latitude, coords.longitude));
  });

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

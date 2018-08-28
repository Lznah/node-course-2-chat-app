var socket = io();

socket.on('connect', function() {
  console.log('Connected to server');

  socket.on('newMessage', function(data) {
    console.log('Recieved message', data);
  });

  socket.emit('createMessage', {
    'from': 'hanzlpe@icloud.com',
    'text': 'Hello World!'
  });
});

socket.on('disconnect', function() {
  console.log('Disconnected from server');
});

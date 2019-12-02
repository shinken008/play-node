var socket = new WebSocket('ws://localhost:3000');

socket.send('hello world'); // send text

socket.send(new Blob(['hello'])); // send binary

socket.close(); // send a close signal
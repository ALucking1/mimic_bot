require('dotenv').config();
var Bot = require('./lib/bot.js');

var express = require('express');
var app = express();
app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'));

var server = app.listen(3000);
var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket) {
  console.log("Connected: %s", socket.id);
});

// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!');
// });

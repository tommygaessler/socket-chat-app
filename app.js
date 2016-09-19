var Express = require('express');
var Socket = require('socket.io');
var http = require('http');

var app = Express();
var server = http.createServer(app);
var io = Socket(server);

app.use(Express.static('public'));

io.on('connection', function(socket){
  console.log('We are entering the chat room');

  socket.on('chat', function(data) {

    io.emit('listen', data)

    console.log(data);
  })
})

var port = process.env.PORT || 3000;
server.listen(port, function(){
  console.log('Now listening on port: ' + port);
})

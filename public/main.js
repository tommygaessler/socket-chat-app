var socket = io();

socket.on('listen', function(data){
  console.log(data);
  $('#archive').append(`<p class="well well-lg">${data.username}: ${data.message}</p>`);
});

$(document).ready(function() {
  $('form').on('submit', function(event) {
    event.preventDefault();

    var username = $('#username').val();
    var message = $('#message').val();

    var data = {
      username: username,
      message: message
    }
    socket.emit('chat', data);

    message = $('#message').val('');
  });
});

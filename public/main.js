var socket = io();

socket.on('listen', function(data){
  console.log(data);
  $('#archive').append(`<div class="well well-lg"><blockquote><p>${data.message}</p><footer>From: <cite title="${data.username}">${data.username}</cite></footer></blockquote></div>`);
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

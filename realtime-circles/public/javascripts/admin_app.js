// get our connection to the socket.io server
var socket = io();

let input = document.getElementById("input")
var players = document.getElementById('players');
var initials = '';
document.getElementById('clear').addEventListener('click', function() {
    socket.emit('clear-display');
  });  
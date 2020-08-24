// get our connection to the socket.io server
var socket = io();


// listen to the server for the `clear-display` event
socket.on('clear-display', function () {
  input.value = '';
});

// listen to the server for when the player list has changed
socket.on('update-player-list', function (data) {
  console.log("incoming player list", data)
  var playerList = '<li>' + data.join('</li><li>') + '</li>';
  players.innerHTML = playerList;
});

let button = document.getElementById("button")
let input = document.getElementById("input")
var players = document.getElementById('players');
var initials = '';

button.addEventListener("click", function(evt) {
  console.log(input.value)
  socket.emit("player-input", {
    initials:initials,
    input: input.value
  })
})

// do {//
  initials = getInitials();
// } while (initials.length < 2 || initials.length > 3);
socket.emit('register-player', initials);

function getInitials() {
  var input = prompt("Please enter your name (first name)");
  return input ? input.toUpperCase() : '';
}
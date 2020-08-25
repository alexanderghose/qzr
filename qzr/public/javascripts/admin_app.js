// get our connection to the socket.io server
var socket = io();

socket.on("player-input", function () {
  console.log("trigger page refresh..")
//  window.location.reload();
});

let input = document.getElementById("input")
var players = document.getElementById('players');
var initials = '';
document.getElementById('clear').addEventListener('click', function () {
  socket.emit('clear-display');
  window.location.reload()
});

// add an event listener to all the buttons that have className plusOne
var plusOneBtns = document.getElementsByClassName("plusone");
for (let i = 0; i < plusOneBtns.length; ++i) {
  plusOneBtns[i].addEventListener("click", function(evt) {
    socket.emit("plusOne", {initials: evt.target.id});
    window.location.reload()
  })
}

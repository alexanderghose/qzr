var io = require('socket.io')();

// associative array to track player inputs
let player_inputs = require("./models/player_inputs")

// object to track player's initials
var players = {};

io.on('connection', function (socket) {

    socket.on('register-player', function (initials) {
      // each socket has a unique id
      players[socket.id] = initials;
      player_inputs.push(initials,"")
      console.log("players",players)
      console.log("player_inputs", player_inputs.getAll())
      io.emit('update-player-list', Object.keys(players).map(id => players[id]));
    });

    socket.on("player-input", function(data) {
      player_inputs.push(data.initials, data.input)
      console.log(player_inputs.getAll())
      io.emit("player-input");
    })

    socket.on("plusOne", function(data) {
      player_inputs.addPoint(data.initials)
      console.log(player_inputs.getAllScores())
    })

    socket.on('clear-display', async function () {
      io.emit('clear-display');
      let question = ""
      await player_inputs.saveToDB(question);
      player_inputs.clearAll();
    });

    // when the player disconnects, remove key & notify clients
    socket.on('disconnect', function () {
      player_inputs.deletePlayer(players[socket.id]);
      delete players[socket.id];
      io.emit('update-player-list', Object.keys(players).map(id => players[id]));
    });

});

module.exports = io;
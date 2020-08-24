var express = require('express');
var router = express.Router();
let inputs = require("../models/player_inputs")
let nl2br = require("nl2br")

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get("/admin", function(req,res) {
  let player_data = inputs.getAll()
  let player_scores = inputs.getAllScores();
  console.log("/admin", player_data)
  res.render("admin", {
    player_data:player_data,
    player_scores:player_scores,
    nl2br:nl2br
  })

})

module.exports = router;

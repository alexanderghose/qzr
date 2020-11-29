var express = require('express');
var router = express.Router();
let inputs = require("../models/player_inputs")


router.get('/get_algorithm_question', function(req,res) {
  res.send('Random algorithm question coming right up')
});

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

function formatstr(text) {
  let text_so_far = ""
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == '\n') {
      text_so_far += "<br>"
    } else if (text.charAt(i) == ' ') {
      text_so_far += "&nbsp"
    } else {
      text_so_far += text.charAt(i)
    }
  }
  return text_so_far;
}

router.get("/admin", function(req,res) {
  let player_data = inputs.getAll()
  let player_scores = inputs.getAllScores();
  console.log("/admin", player_data)
  res.render("admin", {
    player_data:player_data,
    player_scores:player_scores,
    formatstr:formatstr
  })

})

module.exports = router;

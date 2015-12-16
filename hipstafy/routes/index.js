var express = require('express');
var router = express.Router();

var snippets = require('./lib/snippets.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Hipstafy'
  });
});

router.post('/hipstafy', function(req, res, next) {

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  // split user input by the spaces
  var userInput = req.body.textbox;
  var userInputArray = userInput.split(' ');
  // console.log(userInputArray[1]);
  //create new array that combines one word from user input and one word from snippets

  userInputArray.forEach(function(x) {
    var num = getRandomInt(0, snippets.length - 1);
    var randomHipsterWord = snippets[num];
    var message = x + " " + randomHipsterWord;
    res.send('/hipstafy', message);
  });

});

module.exports = router;

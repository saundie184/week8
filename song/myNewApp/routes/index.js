var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { message: 'This is the song that doesn\'t end', img: 'http://rophydoes.rintin.com/wp-content/uploads/2011/01/lambchop1.jpg',link: 'Next >>>', url: '/verse2'});
});

router.get('/verse2', function(req, res, next) {
  res.render('index', { message: 'It goes on and on my friends', link: 'Next >>>', url: '/verse3'});
});

router.get('/verse3', function(req, res, next) {
  res.render('index', { message: 'And they\'ll keep singing it forever just because...', link: 'Next >>>', url: '/verse4'});
});

router.get('/verse4', function(req, res, next) {
  res.render('index', { message: 'Some people started singing it, not knowing what it was...', link: 'Next >>>', url: '/'});
});





module.exports = router;

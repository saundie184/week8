var express = require('express');
var router = express.Router();


// GET ‘/’ - shows all resources
// GET ‘/new’ - shows new create new resource page
// POST ‘/new’ - creates individual
// GET ‘/:id’ - shows individual resource
// GET ‘/:id/edit’ - shows edit page of individual resource
// PUT ‘/:id’ - updates individual resource
// DELETE ‘/:id’ - removes resource


/* GET users listing. */
// means /users/
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

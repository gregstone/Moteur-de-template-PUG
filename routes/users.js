var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});




/* PUT */
router.put('/:name([a-z]+)', function(req, res, next) {
  res.send("Hey my name is " + req.params.name );
});

/* DELETE */
router.delete('/:id(\\d+)', function(req, res, next) {
  res.send("Hey it's a DELTE ID " + req.params.id );
});



module.exports = router;
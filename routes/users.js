var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/hoho', function(req, res, next) {
  res.send('hohoho');
});

router.get('/kaka', function(req, res, next) {
  res.json({status :200, msg:'success'});
});


router.get('/kaka', function(req, res, next) {
  res.json({status :200, msg:'success'});
});

router.get('/giveme', function(req, res, next) {
  let number = Math.random();
  res.json({status : number, msg:'success'});
});


module.exports = router;

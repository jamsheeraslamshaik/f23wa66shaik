var express = require('express');
var router = express.Router();
var x= Math.floor(Math.random());
var y=Math.floor(Math.random());
/* GET home page. */
router.get('/', function(req, res, next) {
var result1=Math.atan(x);
var result2=Math.exp(y);
  res.send(`Math.atan() applied to[${x}]=${result1}<br>Math.exp() applied to[${y}]=${result2}`);
});

module.exports = router;
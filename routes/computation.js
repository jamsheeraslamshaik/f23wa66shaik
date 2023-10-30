var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var x= Math.random().toFixed(2);
var y=Math.random().toFixed(2);
var result1=Math.atan(x);
var result2=Math.exp(y);
  res.send(`Math.atan() applied to[${x}]=${result1}<br>Math.exp() applied to[${y}]=${result2}`);
});

module.exports = router;
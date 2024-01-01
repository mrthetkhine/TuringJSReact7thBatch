var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/hello', function(req, res, next) {
  res.json({
    'data':'Hello World'
  });
});
router.get('/world', function(req, res, next) {
  res.send("<h1>Hello World</h1>");
});
module.exports = router;

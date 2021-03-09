var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const bd = require('../bd')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(bd);
});

module.exports = router;

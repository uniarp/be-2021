var express = require('express');
const connect = require('../bd');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ hora: connect.connect() });
});

module.exports = router;

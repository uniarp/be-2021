var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
//exemplo de rota/ respondendo com json
router.get('/exemplo', function(req, res, next) {
  res.send({
    nome: 'Sam',
  });
});

module.exports = router;

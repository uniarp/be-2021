var express = require('express');
var router = express.Router();
var app = express();

// GET method route
router.get('/', (req, res, next) => {
  res.status(200).send({
      mensagem: 'OK - Reserva Sala'
  })
});

// POST method route
router.post('/', (req, res, next) => {
  res.status(201).send({
      mensagem: 'OK - POST - Reserva Sala'
  })
});

module.exports = router;

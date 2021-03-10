var express = require('express');
var router = express.Router();


// GET method route
router.get('/', (req, res, next) => {
  res.status(200).send({
      mensagem: 'OK - Reserva Equipamento'
  })
});

// POST method route
router.post('/', (req, res, next) => {
  res.status(201).send({
      mensagem: 'OK - POST - Reserva Equipamento'
  })
});

module.exports = router;

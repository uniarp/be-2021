var express = require('express');
var router = express.Router();

// GET method route
app.get('/', (req, res, next) => {
  res.status(200).send({
      mensagem: 'OK - Vistoria'
  })
});

// POST method route
app.post('/', (req, res, next) => {
  res.status(201).send({
      
  })
});

module.exports = router;

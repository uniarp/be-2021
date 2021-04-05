var express = require('express');
var router = express.Router();

// GET reservaSala
router.get('/', (req, res, next) => {
  res.json({
      mensagem: 'OK -  GET - Reserva Sala',
      id : '1',
      data: '06/02/2021',
      qtdAlunos : '25',
      status : 'Reservado',
      periodo : 'Noturno'
  }, {
      id : '2',
      data: '26/02/2021',
      qtdAlunos : '35',
      status : 'Reservado',
      periodo : 'Noturno'
  })
});

// GET excluir
router.get('/excluir', (req, res, next) => {
  const id = req.params.id_reservaSalas
  res.json({
      mensagem: 'OK - Exclusão feita',
      
  })
});

// GET porProfessor
router.get('/porProfessor', (req, res, next) => {
  const id = req.params.id_reservaSalas
  res.json({
      mensagem: 'OK - Por Professor',
      id : '1',
      data: '06/02/2021',
      qtdAlunos : '25',
      status : 'Reservado',
      periodo : 'Noturno'
  }, {
      id : '2',
      data: '26/02/2021',
      qtdAlunos : '35',
      status : 'Reservado',
      periodo : 'Noturno'
  })
});

// POST method route
router.post('/', (req, res, next) => {
  res.status(201).send({
      mensagem: 'OK - POST - Reserva Sala'
  })
});

// POST confirmar
router.post('/confirmar', (req, res, next) => {
  res.status(201).send({
      mensagem: 'OK - POST - Confirmar Sala',
      id : '1',
      data : '26/02/2021',
      qtdAlunos : '25',
      status : 'Reservado',
      periodo : 'Noturno'
  })
});

// POST solicitar
router.post('/solicitar', (req, res, next) => {
  res.status(201).send({
      mensagem: 'OK - POST - Solicitar Sala',
      id : '1',
      data : '26/02/2021',
      qtdAlunos : '25',
      status : 'Reservado',
      periodo : 'Noturno'
  })
});

// POST cancelar
router.post('/cancelar', (req, res, next) => {
  res.status(201).send({
      mensagem: 'OK - POST - Cancelar Sala',
      id : '1',
      data : '26/02/2021',
      qtdAlunos : '25',
      status : 'Reservado',
      periodo : 'Noturno'
  })
});

module.exports = router;

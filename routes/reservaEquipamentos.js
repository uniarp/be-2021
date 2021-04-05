var express = require('express');
var router = express.Router();


// GET reservaEquipamentos *
router.get('/', (req, res, next) => {
  res.json({
      mensagem: 'OK - GET - Reserva Equipamento',
      id : '1',
      dataEntrega : '26/02/2021',
      dataDevolucao : '01/03/2021',
      observacao : ' Nada demais',
      status : 'Entregue',
      periodo : 'Noturno'
  },{
    id : '2',
    dataEntrega : '27/02/2021',
    dataDevolucao : '02/03/2021',
    observacao : 'Baterias Inclusas',
    status : 'Entregue',
    perido : 'Vespertino'
  })
});

// GET Excluir
router.get('/excluir', (req, res, next) => {
  const id = req.params.id_reservaEquipamentos
  res.json({
      mensagem: 'OK - Exclusao Feita',
  })
});

// GET reservaEquipamentos/porProfessor
router.get('/porProfessor', (req, res, next) => {
  const id = req.params.id_reservaEquipamentos
  res.json({
      mensagem: 'OK - Por Professor',
      id : '1',
      dataEntrega : '26/02/2021',
      dataDevolucao : '01/03/2021',
      observacao : ' Nada demais',
      status : 'Entregue',
      periodo : 'Noturno'
  },{
      id : '2',
      dataEntrega : '27/02/2021',
      dataDevolucao : '02/03/2021',
      observacao : 'Baterias Inclusas',
      status : 'Entregue',
      perido : 'Vespertino'
  })
});


// POST confirmar
router.post('/confirmar', (req, res, next) => {
  res.status(201).send({
      mensagem: ' POST - Confirmar Feito',
      id : '1',
      dataEntrega : '26/02/2021',
      dataDevolucao : '01/03/2021',
      observacao : 'Nada demais',
      status : 'Entregue',
      periodo : 'Noturno'
  })
});

// POST solicitar
router.post('/solicitar', (req, res, next) => {
  res.status(201).send({
      mensagem: ' POST - Solicitar Equipamento',
      id : '1',
      dataEntrega : '01/03/2021',
      observacao : 'Nada demais',
      status : 'Entregue',
      periodo : 'Noturno'
  })
});

// POST alterar
router.post('/alterar', (req, res, next) => {
  const id = req.params.id_reservaEquipamentos
  res.status(201).send({
      mensagem: ' POST - Alterar Equipamento',
      id : '77',
      dataEntrega : '26/02/2021',
      dataDevolucao : '01/03/2021',
      observacao : 'Nada de mais',
      status : 'Entregue',
      periodo : 'Noturno'
  })
});

// POST cancelar
router.post('/cancelar', (req, res, next) => {
  res.status(201).send({
      mensagem: ' POST - Cancelar Equipamento',
      id : '1',
      dataEntrega : '26/02/2021',
      dataDevolucao : '01/03/2021',
      observacao : 'Nada de mais',
      status : 'Entregue',
      periodo : 'Noturno'
  })
});

  // POST method route
router.post('/', (req, res, next) => {
  res.status(201).send({
      mensagem: ' POST - Reserva Equipamento'
  });
  
});
module.exports = router;

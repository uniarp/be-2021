var express = require('express');
var router = express.Router();


// GET /vistoria
router.get('/', (req, res, next) => {
  res.status(200).send({
      mensagem: 'GET - Vistoria',
      id : '1',
      emConformidade : 'Sim',
      data : '01/03/2021',
      descricao : 'Problemas resolvidos: Janelas e Carteiras',
      periodo : 'Noturno'
  }, {
    mensagem: 'GET - Vistoria',
    id : '2',
    emConformidade : 'Não',
    data : '02/03/2021',
    descricao : 'Problemas resolvidos: Projetor e Luzes',
    periodo : 'Vespertino'
  })
});

// GET /vistoria/cadastrar
router.get('/cadastrar', (req, res, next) => {
  res.status(200).send({
      mensagem: 'GET - Vistoria Cadastrada',
      id : '1',
      emConformidade : 'Sim',
      data : '01/03/2021',
      descricao : 'Problemas resolvidos: Janelas e Carteiras',
      periodo : 'Noturno'
  })
});

// GET /vistoria/{id}/excluir
router.get('/excluir', (req, res, next) => {
  const id = req.params.id_vistoria
  res.status(200).send({
      mensagem : 'Vistoria Excluida'
  })
});

// POST /vistoria/{id}/alterar
router.post('/:id_vistorias/alterar', (req, res, next) => {
  const id = req.params.id_vistoria
  res.status(201).send({
      mensagem: 'POST - Vistoria Alterada',
      id : '77',
      emConformidade: 'Não',
      data : '02/03/2021',
      descricao: 'Problemas resolvidos: Projetor e Luzes',
      periodo : 'Vespertino'
  })
});

module.exports = router;
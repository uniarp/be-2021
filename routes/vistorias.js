var express = require('express');
var router = express.Router();

// GET /vistorias
router.get('/', (req, res, next) => {
  res.json({
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


// GET /vistorias/cadastrar
router.post('/cadastrar', (req, res, next) => {
  const vistoria = req.params.vistoria;
  res.json({
      mensagem: 'GET - Vistoria Cadastrada',
      id : '1',
      emConformidade : 'Sim',
      data : '01/03/2021',
      descricao : 'Problemas resolvidos: Janelas e Carteiras',
      periodo : 'Noturno'
  })
});


// GET /vistorias/{id}/excluir
router.get('/:id_vistoria/excluir', (req, res, next) => {
  const id = req.params.id_vistoria;

  res.json({
      mensagem : 'Vistoria Excluida'
  })
});


// POST /vistorias/{id}/alterar
router.post('/:id_vistoria/alterar', (req, res, next) => {
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

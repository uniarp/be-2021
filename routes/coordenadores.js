var express = require('express');
var router = express.Router();

/* GET /coordenadores */
router.get('/', function(req, res, next) {
  res.json({
      mensagem: 'GET coordenador',
      id : 1,
      login : 'coordenador',
      senha : 'qwerty',
      nivel : '1',
      nomeCompleto : 'Xavier Silva',
      email : 'email@email.com'
    },
    {
      id : 2,
      login : 'ramon',
      senha : '12345',
      nivel : '2',
      nomeCompleto : 'Inherits',
      email : 'r@r.com'
  })
});

/* POST /coordenadores/cadastrar */
router.post('/cadastrar', function(req, res, next) {
  const coordenador = req.params.coordenador
  res.status(201).send({
      mensagem : 'POST Cadastrar coordenador',
      id : 2,
      login : 'ramon',
      senha : '12345',
      nivel : '2',
      nomeCompleto : 'Inherits',
      email : 'r@r.com'
    })
})

/* POST /coordenadores/{id}/alterar. */
router.post('/:id_coordenador/alterar', function(req, res, next) {
  const id = req.params.id_coordenador
  const sala = req.params.sala
  res.json({
    mensagem: 'GET Alterar coordenadors',
    id : 1,
    login : 'coordenador',
    senha : 'qwerty',
    nivel : '1',
    nomeCompleto : 'Xavier Silva',
    email : 'email@email.com'
  })
});

/* GET /coordenadores/{id}/excluir. */
router.get('/:id_coordenador/excluir', function(req, res, next) {
  const id = req.params.id_coordenador
  res.json({
      mensagem : 'GET ID excluir coordenador',
      id : id
  })
});

module.exports = router;
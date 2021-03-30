var express = require('express');
var router = express.Router();

/* GET /professores */
router.get('/', function(req, res, next) {
  res.status(200).send({
      mensagem: 'GET professor',
      id : 1,
      login : 'professor',
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

/* POST /professores/cadastrar */
router.post('/cadastrar', function(req, res, next) {
  const professor = req.params.professor
  res.status(201).send({
      mensagem : 'POST Cadastrar professor',
      id : 2,
      login : 'ramon',
      senha : '12345',
      nivel : '2',
      nomeCompleto : 'Inherits',
      email : 'r@r.com'
    })
})

/* POST /professores/{id}/alterar. */
router.post('/:id_professor/alterar', function(req, res, next) {
  const id = req.params.id_professor
  const sala = req.params.sala
  res.status(200).send({
    mensagem: 'GET Alterar professors',
    id : 1,
    login : 'professor',
    senha : 'qwerty',
    nivel : '1',
    nomeCompleto : 'Xavier Silva',
    email : 'email@email.com'
  })
});

/* GET /professores/{id}/excluir. */
router.get('/:id_professor/excluir', function(req, res, next) {
  const id = req.params.id_professor
  res.status(200).send({
      mensagem : 'GET ID excluir professor',
      id : id
  })
});

module.exports = router;
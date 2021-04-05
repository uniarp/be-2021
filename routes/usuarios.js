var express = require('express');
var router = express.Router();

/* GET /usuarios */
router.get('/', function(req, res, next) {
  res.json({
      mensagem: 'GET Usuarios',
      id : 1,
      login : 'usuario',
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

/* POST /usuarios/cadastrar */
router.post('/cadastrar', function(req, res, next) {
  const usuario = req.params.usuario
  res.status(201).send({
      mensagem : 'POST Cadastrar Usuario',
      id : 2,
      login : 'ramon',
      senha : '12345',
      nivel : '2',
      nomeCompleto : 'Inherits',
      email : 'r@r.com'
    })
})

/* POST /usuarios/{id}/alterar. */
router.post('/:id_usuario/alterar', function(req, res, next) {
  const id = req.params.id_usuario
  const sala = req.params.sala
  res.json({
    mensagem: 'GET Alterar Usuarios',
    id : 1,
    login : 'usuario',
    senha : 'qwerty',
    nivel : '1',
    nomeCompleto : 'Xavier Silva',
    email : 'email@email.com'
  })
});

/* GET /usuarios/{id}/excluir. */
router.get('/:id_usuario/excluir', function(req, res, next) {
  const id = req.params.id_usuario
  res.json({
      mensagem : 'GET ID excluir Usuario',
      id : id
  })
});

module.exports = router;
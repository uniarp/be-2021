var express = require('express');
var router = express.Router();

// GET /Usuario/ *
router.get('/', (req, res, next) => {
  res.status(200).send({
      mensagem: 'GET Usuarios',
      id : 1,
      login : 'usuario',
      senha : 'qwerty',
      nivel : '1',
      nomeCompleto : 'Xavier Silva',
      email : 'email@email.com'
  })
});


// POST /usuarios/{id}/promover
router.post('/:id_usuario/promover', (req, res, next) => {
  const id = req.params.id_usuario
  res.status(201).send({
      mensagem: 'OK - POST - Usuarios',
      id : '77',
  })
});

module.exports = router;

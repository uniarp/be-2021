var express = require('express');
var router = express.Router();

/* GET /usuarios */
router.get('/', function(req, res) {
    res.status(200).json([
        {
            id : 1,
            login : "usuario",
            senha : "qwerty",
            nivel : "1",
            nomeCompleto : "Xavier Silva",
            email : "email@email.com"
        },
        {
            id : 2,
            login : "ramon",
            senha : "12345",
            nivel : "2",
            nomeCompleto : "Inherits",
            email : "r@r.com"
        }
    ]);
});

/* POST /usuarios/cadastrar */
router.post('/cadastrar', function(req, res) {
    const data = {
        login : req.body.loginUsuario,
        senha : req.body.senhaUsuario,
        nivel : req.body.nivelUsuario,
        nomeCompleto : req.body.nomeCompletoUsuario,
        email : req.body.emailUsuario
    };
    res.status(201).json(data);
});

/* POST /usuarios/{id}/alterar. */
router.post('/:id_usuario/alterar', function(req, res) {
    const id = req.params.id_usuario
    const data = {
        login : req.body.loginUsuario,
        senha : req.body.senhaUsuario,
        nivel : req.body.nivelUsuario,
        nomeCompleto : req.body.nomeCompletoUsuario,
        email : req.body.emailUsuario
    };
    res.status(200).json(data);
});

/* GET /usuarios/{id}/excluir. */
router.get('/:id_usuario/excluir', function(req, res) {
    const id = req.params.id_usuario
    res.status(200).json({
        id : id
    });
});

module.exports = router;
var express = require('express');
var router = express.Router();

/* GET /coordenadores */
router.get('/', function(req, res) {
    res.status(200).json([
        {
            id : 1,
            login : "coordenador",
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

/* POST /coordenadores/cadastrar */
router.post('/cadastrar', function(req, res) {
    const data = {
        login : req.body.loginCoordenador,
        senha : req.body.senhaCoordenador,
        nivel : req.body.nivelCoordenador,
        nomeCompleto : req.body.nomeCompletoCoordenador,
        email : req.body.emailCoordenador
    };
    res.status(201).json(data);
});

/* POST /coordenadores/{id}/alterar */
router.post('/:id_coordenador/alterar', function(req, res) {
    const id = req.params.id_coordenador;
    const data = {
        login : req.body.loginCoordenador,
        senha : req.body.senhaCoordenador,
        nivel : req.body.nivelCoordenador,
        nomeCompleto : req.body.nomeCompletoCoordenador,
        email : req.body.emailCoordenador
    };
    res.status(200).json(data);
});

/* GET /coordenadores/{id}/excluir */
router.get('/:id_coordenador/excluir', function(req, res) {
    const id = req.params.id_coordenador;
    res.status(200).json({
        id : id
    });
});

module.exports = router;
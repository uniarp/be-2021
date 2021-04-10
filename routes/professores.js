var express = require('express');
var router = express.Router();

/* GET /professores */
router.get('/', function(req, res) {
    res.status(200).json([
        {
            id : 1,
            login : "professor",
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

/* POST /professores/cadastrar */
router.post('/cadastrar', function(req, res) {
    const data = {
        login : req.body.loginProfessor,
        senha : req.body.senhaProfessor,
        nivel : req.body.nivelProfessor,
        nomeCompleto : req.body.nomeCompletoProfessor,
        email : req.body.emailProfessor
    };
    res.status(201).json(data);
});

/* POST /professores/{id}/alterar. */
router.post('/:id_professor/alterar', function(req, res, next) {
    const id = req.params.id_professor
    const data = {
        login : req.body.loginProfessor,
        senha : req.body.senhaProfessor,
        nivel : req.body.nivelProfessor,
        nomeCompleto : req.body.nomeCompletoProfessor,
        email : req.body.emailProfessor
    }
    res.status(200).json(data);
});

/* GET /professores/{id}/excluir. */
router.get('/:id_professor/excluir', function(req, res, next) {
    const id = req.params.id_professor;
    res.status(200).json({
        id : id
    });
});

module.exports = router;
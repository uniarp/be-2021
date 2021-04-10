var express = require('express');
var router = express.Router();

/* GET /disciplinas */
router.get('/', function(req, res) {
    res.status(200).json([
        {
            id: 1,
            nome : "Matemática Discreta",
            periodo : "Noturno",
            diaSemana : [2, 3],
        },
        {
            id: 2,
            nome : "Projeto Integrador I",
            periodo : "Noturno",
            diaSemana : [1, 4]
        }
    ]);
});

/* POST /disciplinas/cadastrar */
router.post('/cadastrar', function(req, res) {
    const data = {
        nome : req.body.nomeDisciplina,
        periodo : req.body.periodoDisciplina,
        diaSemana : req.body.diaSemanaDisciplina
    };
    res.status(201).json(data);
});

/* POST /disciplinas/{id}/alterar */
router.get('/:id_disciplina/alterar', function(req, res) {
    const id = req.params.id_disciplina;
    const data = {
        nome : req.body.nomeDisciplina,
        periodo : req.body.periodoDisciplina,
        diaSemana : req.body.diaSemanaDisciplina
    };
    res.status(200).json(data);
});

/* GET /disciplinas/{id}/excluir */
router.get('/:id_disciplina/excluir', function(req, res) {
    const id = req.params.id_disciplina
    res.status(200).json({
        id : id
    });
});

module.exports = router;
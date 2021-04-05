var express = require('express');
var router = express.Router();

/* GET /incidentes/ */
router.get('/', function(req, res, next) {
    res.json({
        mensagem : 'GET Incidente',
        id : 49,
        descricao : 'Estou com problemas no ar condicionado',
        tempoAbertura : '13/12/2020 09:45:56',
        status : 'Fechado',
        tempoFechamento : '13/12/2020 12:38:42',
        resolucao : 'Limpeza completa do ar'
    })
});

/* GET /incidentes/{id}/alterar. */
router.get('/:id_incidente/alterar', function(req, res, next) {
    const id = req.params.id_incidente
    res.json({
        mensagem : 'GET Alterar Incidente',
        id : id
    })
});

/* POST /incidentes/cadastrar */
router.post('/cadastrar', function(req, res, next) {
    res.status(201).send({
        mensagem : 'POST Cadastrar Incidente',
        id : 49,
        descricao : 'Estou com problemas no ar condicionado',
        tempoAbertura : '13/12/2020 09:45:56',
        status : 'Fechado',
        tempoFechamento : '13/12/2020 12:38:42',
        resolucao : 'Limpeza completa do ar'

    })
})

/* GET /incidentes/{id}/excluir. */
router.get('/:id_incidente/excluir', function(req, res, next) {
    const id = req.params.id_incidente
    res.json({
        mensagem : 'GET Excluir incidente',
        id : id
    })
});

module.exports = router;
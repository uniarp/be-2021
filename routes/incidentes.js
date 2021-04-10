var express = require("express");
var router = express.Router();

/* GET /incidentes/ */
router.get('/', function(req, res, next) {
    res.status(200).json([
        {
            id : 49,
            descricao : "Estou com problemas no ar condicionado",
            tempoAbertura : "13/12/2020 09:45:56",
            status : "Fechado",
            tempoFechamento : "13/12/2020 12:38:42",
            resolucao : "Limpeza completa do ar"
        },
        {
            id : 50,
            descricao : "Estou com problema em um computaodr",
            tempoAbertura : "14/01/2029 09:45:56",
            status : "Aberto",
            tempoFechamento : "13/12/2032 12:38:42",
            resolucao : "Trocado a fonte"
        }
    ]);
});

/* POST /incidentes/cadastrar */
router.post('/cadastrar', function(req, res, next) {
    const data = {
        descricao : req.body.descricaoIncidente,
        tempoAbertura : req.body.tempoAberturaIncidente,
        status : req.body.statusIncidente,
        tempoFechamento : req.body.tempoFechamentoIncidente,
        resolucao : req.body.resolucaoIncidente
    };
    res.status(201).json(data);
});

/* POST /incidentes/{id}/alterar. */
router.post('/:id_incidente/alterar', function(req, res, next) {
    const id = req.params.id_incidente;
    const data = {
        descricao : req.body.descricaoIncidente,
        tempoAbertura : req.body.tempoAberturaIncidente,
        status : req.body.statusIncidente,
        tempoFechamento : req.body.tempoFechamentoIncidente,
        resolucao : req.body.resolucaoIncidente
    };
    res.status(200).json(data);
});

/* GET /incidentes/{id}/excluir. */
router.get('/:id_incidente/excluir', function(req, res, next) {
    const id = req.params.id_incidente;
    res.status(200).json({
        id : id
    });
});

module.exports = router;
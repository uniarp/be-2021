var express = require('express');
var router = express.Router();

/* GET /laboratoriosinformatica/ */
router.get('/', function(req, res, next) {
    res.status(200).send({
        mensagem : 'GET LaboratoriosInformatica',
        id : 11,
        numeroSala : 908,
        localizacao : ['D', '2º andar'],
        capacidade : 25,
        qtdComputadores : 20,
        numeroLaboratorioInformatica : 2
    })
});

/* GET /laboratoriosinformatica/{id}/alterar. */
router.get('/:id_laboratoriosinformatica/alterar', function(req, res, next) {
    const id = req.params.id_laboratoriosinformatica
    res.status(200).send({
        mensagem : 'GET ID Alterar LaboratoriosInformatica',
        id : id
    })
});

/* POST /laboratoriosinformatica/cadastrar */
router.post('/cadastrar', function(req, res, next) {
    res.status(201).send({
        mensagem : 'POST Cadastrar LaboratoriosInformatica',
        id : 11,
        numeroSala : 908,
        localizacao : ['D', '2º andar'],
        capacidade : 25,
        qtdComputadores : 20,
        numeroLaboratorioInformatica : 2
    })
})

/* GET /laboratoriosinformatica/{id}/excluir. */
router.get('/:id_laboratoriosinformatica/excluir', function(req, res, next) {
    const id = req.params.id_laboratoriosinformatica
    res.status(200).send({
        mensagem : 'GET Excluir Equipamento',
        id : id
    })
});

module.exports = router;
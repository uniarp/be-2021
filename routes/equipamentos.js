var express = require('express');
var router = express.Router();

/* GET /equipamentos/ */
router.get('/', function(req, res, next) {
    res.json({
        mensagem : 'GET Equipamento',
        id : 1,
        dataAquisicao : '01/03/2021',
        marca : 'Epson',
        modelo : 'FX-3190'
    })
});

/* GET /equipamentos/{id}/alterar. */
router.get('/:id_equipamento/alterar', function(req, res, next) {
    const id = req.params.id_equipamento
    res.json({
        mensagem : 'GET Alterar Equipamento',
        id : id
    })
});

/* POST /equipamentos/cadastrar */
router.post('/cadastrar', function(req, res, next) {
    res.status(201).send({
        mensagem : 'POST Cadastrar Equipamento',
        id : 1,
        dataAquisicao : '01/03/2021',
        marca : 'Epson',
        modelo : 'FX-3190'
    })
})

/* GET /equipamentos/{id}/excluir. */
router.get('/:id_equipamento/excluir', function(req, res, next) {
    const id = req.params.id_equipamento
    res.json({
        mensagem : 'GET Excluir Equipamento',
        id : id
    })
});

module.exports = router;
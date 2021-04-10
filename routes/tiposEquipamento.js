var express = require('express');
var router = express.Router();

/* GET /tipoEquipamentos/ */
router.get('/', function(req, res, next) {
    res.status(200).json({
        mensagem : 'GET tipoEquipamentos',
        id : 1,
        nome: 'Impressora',
        dataAquisicao: '01/03/2021',
        marca: 'Epson',
        modelo:'FX-3190'
        },
        {
        mensagem : 'GET tipoEquipamento',
        id : 2,
        nome: 'Impressora',
        dataAquisicao: '02/03/2021',
        marca: 'HP',
        modelo: 'PRO-3678'
    })
});

/* POST /tipoEquipamentos/cadastrar */
router.post('/cadastrar', function(req, res, next) {
    const tipoEquipamento = req.params.tipoEquipamento
    res.status(201).send({
        mensagem : 'POST tipoEquipamentos ',
        id : 1,
        nome: 'Impressora',
        dataAquisicao: '01/03/2021',
        marca: 'Epson',
        modelo:'FX-3190'
    })
})

/* POST /softwares/{id}/alterar. */
router.post('/:id_tipoEquipamento/alterar', function(req, res, next) {
    const id = req.params.id_tipoEquipamento
    const tipoEquipamento = req.params.tipoEquipamento
    res.json({
        mensagem : 'GET Alterar tipoEquipamento',
        id : 77,
        nome: 'Impressora',
        dataAquisicao: '04/04/2021',
        marca: 'Nova',
        modelo:'X-90'
    })
});

/* GET /tipoEquipamentos/{id}/excluir. */
router.get('/:id_tipoEquipamento/excluir', function(req, res, next) {
    const id = req.params.id_software
    res.json({
        mensagem : 'GET ID excluir TipoEquipamento',
        id : id
    })
});

module.exports = router;
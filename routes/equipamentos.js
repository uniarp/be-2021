var express = require('express');
var router = express.Router();

/* GET /equipamentos/ */
router.get('/', function(req, res) {
    res.status(200).json([
        {
            id : 1,
            dataAquisicao : "01/03/2021",
            marca : "Epson",
            modelo : "FX-3190"
        },
        {
            id : 2,
            dataAquisicao : "02/04/2021",
            marca : "HP",
            modelo : "M1132"
        }
    ]);
});

/* POST /equipamentos/cadastrar */
router.post('/cadastrar', function(req, res) {
    const data = {
        dataAquisicao : req.body.dataAquisicaoEquipamento,
        marca : req.body.marcaEquipamento,
        modelo : req.body.modeloEquipamento
    };
    res.status(201).json(data);
});

/* POST /equipamentos/{id}/alterar. */
router.post('/:id_equipamento/alterar', function(req, res) {
    const id = req.params.id_equipamento;
    const data = {
        dataAquisicao : req.body.dataAquisicaoEquipamento,
        marca : req.body.marcaEquipamento,
        modelo : req.body.modeloEquipamento
    };
    res.status(200).json(data);
});

/* GET /equipamentos/{id}/excluir. */
router.get('/:id_equipamento/excluir', function(req, res) {
    const id = req.params.id_equipamento;
    res.status(200).json({
        id : id
    });
});

module.exports = router;
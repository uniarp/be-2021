var express = require('express');
var router = express.Router();

/* GET /tiposEquipamento/ */
router.get('/', function(req, res) {
    res.status(200).json([
        {
            id : 1,
            nome: "Impressora",
            dataAquisicao: "01/03/2021",
            marca: "Epson",
            modelo:"FX-3190"
        },
        {
            id : 2,
            nome: "Impressora",
            dataAquisicao: "02/03/2021",
            marca: "HP",
            modelo: "PRO-3678"
        }
    ]);
});

/* POST /tiposEquipamento/cadastrar */
router.post('/cadastrar', function(req, res) {
    const data = {
        nome : req.body.nomeTipoEquipamento,
        dataAquisicao : req.body.dataAquisicaoTipoEquipamento,
        marca : req.body.marcaTipoEquipamento,
        modelo : req.body.modeloTipoEquipamento
    };
    res.status(201).json(data);
});

/* POST /tiposEquipamento/{id}/alterar. */
router.post('/:id_tipoequipamento/alterar', function(req, res, next) {
    const id = req.params.id_tipoequipamento
    const data = {
        nome : req.body.nomeTipoEquipamento,
        dataAquisicao : req.body.dataAquisicaoTipoEquipamento,
        marca : req.body.marcaTipoEquipamento,
        modelo : req.body.modeloTipoEquipamento
    };
    res.status(200).json(data);
});

/* GET /tiposEquipamento/{id}/excluir. */
router.get('/:id_tipoequipamento/excluir', function(req, res, next) {
    const id = req.params.id_tipoequipamento
    res.status(200).json({
        id : id
    });
});

module.exports = router;
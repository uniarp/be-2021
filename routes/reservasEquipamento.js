var express = require('express');
var router = express.Router();

/* GET /reservasEquipamento/ */
router.get('/', function(req, res) {
    res.status(200).json([
        {
            id : "1",
            dataEntrega : "26/02/2021",
            dataDevolucao : "01/03/2021",
            observacao : "Nada demais",
            status : "Entregue",
            periodo : "Noturno"
        },
        {
            id : "2",
            dataEntrega : "27/02/2021",
            dataDevolucao : "02/03/2021",
            observacao : "Baterias Inclusas",
            status : "Entregue",
            periodo : "Vespertino"
        }
    ]);  
});

/* POST /reservasEquipamento/cadastrar */
router.post('/cadastrar', function(req, res) {
    const data = {
        dataEntrega : req.body.dataEntregaReservaEquipamento,
        dataDevolucao : req.body.dataDevolucaoReservaEquipamento,
        observacao : req.body.observacaoReservaEquipametno,
        status : req.body.statusResevaEquipamento,
        periodo : req.body.periodoReservaEquipamento
    };
    res.status(201).json(data);
});

/* POST /reservasEquipamento/{id}/alterar */
router.post('/:id_reservaequipamento/alterar', function(req, res) {
    const id = req.params.id_reservaequipamento
    const data = {
        dataEntrega : req.body.dataEntregaReservaEquipamento,
        dataDevolucao : req.body.dataDevolucaoReservaEquipamento,
        observacao : req.body.observacaoReservaEquipametno,
        status : req.body.statusResevaEquipamento,
        periodo : req.body.periodoReservaEquipamento
    };
    res.status(200).json(data);
});

/* GET /reservasEquipamento/{id}/excluir */
router.get('/:id_reservaequipamento/excluir', function(req, res) {
    const id = req.params.id_reservaequipamento;
    res.status(200).json({
        id : id
    });
});

module.exports = router;

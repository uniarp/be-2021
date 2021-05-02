var express = require('express');
var router = express.Router();

/* GET /entregasChave/ */
router.get('/', function(req, res) {
    res.status(200).json([
        {
            id : 5,
            dataHoraEntrega : "01/01/2022 9:00" ,
            dataHoraDevolucao : "01/01/2022 19:00" ,
        },
        {
            id : 9,
            dataHoraEntrega : "02/01/2022 10:00" ,
            dataHoraDevolucao : "01/01/2022 18:00" ,
        }
    ]);
});

/* POST /entregasChave/cadastrar */
router.post('/cadastrar', function(req, res) {
    const data = {
        dataHoraEntrega : req.body.dataHoraEntrega,
        dataHoraDevolucao : req.body.dataHoraDevolucao
    };
    res.status(201).send(data);
})

/* POST /entregasChave/{id}/alterar. */
router.post('/:id_entregaChave/alterar', function(req, res, next) {
    const id = req.params.id_entregaChave;
    const data = {
        dataHoraEntrega : req.body.dataHoraEntrega,
        dataHoraDevolucao : req.body.dataHoraDevolucao
    };
    res.status(200).json(data);
});

/* GET /entregasChave/{id}/excluir. */
router.get('/:id_entregaChave/excluir', function(req, res, next) {
    const id = req.params.id_entregaChave;
    res.status(200).json({
        id : id
    });
});

module.exports = router;
var express = require('express');
var router = express.Router();

/* GET reservasSala */
router.get('/', function(req, res) {
    res.status(200).json([
        {
            id : 1,
            data: "06/02/2021",
            qtdAlunos : "25",
            status : "Reservado",
            periodo : "Noturno"
        },
        {
            id : 2,
            data: "26/02/2021",
            qtdAlunos : "35",
            status : "Reservado",
            periodo : "Noturno"
        }
    ]);
});

/* POST /reservasSala/cadastrar */
router.post('/cadastrar', function(req, res) {
    const data = {
        data : req.body.dataReservaSala,
        qtdAlunos : req.body.qtdAlunosReservaSala,
        status : req.body.statusReservaSala,
        periodo : req.body.periodoReservaSala
    }
    res.status(201).json(data);
});

/* POST /reservasSala/{id}/alterar */
router.post('/:id_reservasala/alterar', function(req, res) {
    const id = req.params.id_reservasala;
    const data = {
        data : req.body.dataReservaSala,
        qtdAlunos : req.body.qtdAlunosReservaSala,
        status : req.body.statusReservaSala,
        periodo : req.body.periodoReservaSala
    }
    res.status(200).json(data);
});

/* GET /reservasSala/{id}/excluir */
router.get('/:id_reservasala/excluir', (req, res, next) => {
    const id = req.params.id_reservasala;
    res.status(200).json({
        id : id
    });
});

module.exports = router;
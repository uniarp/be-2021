var express = require('express');
var router = express.Router();

/* GET /salas/ */
router.get('/', function(req, res) {
    res.status(200).json([
        {
            id : 5,
            numero: 222,
            localizacao: ['B', '2º andar'],
            capacidade: 44,
        },
        {
            id : 7,
            numero: 123,
            localizacao: ['C', '1º andar'],
            capacidade: 33
        }
    ]);
});

/* POST /salas/cadastrar */
router.post('/cadastrar', function(req, res) {
    const data = {
        numero : req.params.numeroSala,
        localizacao : req.params.localizacaoSala,
        capacidade : req.params.capacidadeSala,
    };
    res.status(201).send(data);
})

/* POST /salas/{id}/alterar */
router.post('/:id_sala/alterar', function(req, res, next) {
    const id = req.params.id_sala;
    const data = {
        numero : req.params.numeroSala,
        localizacao : req.params.localizacaoSala,
        capacidade : req.params.capacidadeSala,
    };
    res.status(200).json(data);
});

/* GET /salas/{id}/excluir */
router.get('/:id_sala/excluir', function(req, res, next) {
    const id = req.params.id_sala;
    res.status(200).json({
        id : id
    })
});

module.exports = router;
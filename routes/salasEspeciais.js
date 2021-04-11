var express = require('express');
var router = express.Router();

/* GET /salasEspeciais/ */
router.get('/', function(req, res) {
    res.status(200).json([
        {
            id : 5,
            numeroSala: 222,
            nomeSala: 'Salão',
            localizacao: ['B', '2º andar'],
            capacidade: 44,
        },
        {
            id : 7,
            numeroSala: 123,
            nomeSala: 'Salão nobre',
            localizacao: ['C', '1º andar'],
            capacidade: 33,
        }
    ]);
});

/* POST /salasEspeciais/cadastrar */
router.post('/cadastrar', function(req, res) {
    const data = {
        numero : req.body.numeroSalaEspecial,
        localizacao : req.body.localizacaoSalaEspecial,
        capacidade : req.body.capacidadeSalaEspecial
    };
    res.status(201).json(data);
})

/* POST /salasEspeciais/{id}/alterar. */
router.post('/:id_salaespecial/alterar', function(req, res) {
    const id = req.params.id_salaespecial;
    const data = {
        numero : req.body.numeroSalaEspecial,
        localizacao : req.body.localizacaoSalaEspecial,
        capacidade : req.body.capacidadeSalaEspecial
    };
    res.status(200).json(data);
});

/* GET /salasEspeciais/{id}/excluir. */
router.get('/:id_salaespecial/excluir', function(req, res) {
    const id = req.params.id_salaespecial
    res.status(200).json({
        id : id
    });
});

module.exports = router;
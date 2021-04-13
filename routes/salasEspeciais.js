var express = require('express');
var router = express.Router();

/* GET /salasEspeciais/ */
<<<<<<< Updated upstream
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
=======
<<<<<<< Updated upstream
router.get('/', function(req, res, next) {
    res.json({
    mensagem : 'GET Salas Especiais',
    id : 5,
    numeroSala: 222,
    nomeSala: 'Salão',
    localizacao: ['B', '2º andar'],
    capacidade: 44,
    },
    {
    mensagem : 'Get Salas Especiais',
    id : 7,
    numeroSala: 123,
    nomeSala: 'Salão nobre',
    localizacao: ['C', '1º andar'],
    capacidade: 33,
    })
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======
router.post('/:id_salaEspecial/alterar', function(req, res, next) {
    const id = req.params.id_salaEspecial
    const salaEspecial = req.params.salaEspecial
    res.json({
        mensagem : 'GET Alterar Sala Especial',
        id : 1,
        numeroSala: 321,
        localizacao: ['B', '2º andar'],
        capacidade: 35,
    })
=======
router.get('/', function(req, res) {
    res.status(200).json([
        {
            id : 5,
            numeroSala: 222,
            nomeSala: "Salão",
            localizacao: {
                bloco : "B",
                andar : "2º andar"
            },
            capacidade: 44
        },
        {
            id : 7,
            numeroSala : 123,
            nomeSala : "Salão nobre",
            localizacao : {
                bloco : "C",
                andar : "1º andar"
            },
            capacidade : 33
        }
    ]);
});

/* POST /salasEspeciais/cadastrar */
router.post('/cadastrar', function(req, res) {
    const data = {
        numero : req.body.numeroSalaEspecial,
        nome : req.body.nomeSalaEspecial,
        localizacao : {
            bloco : req.body.localizacaoSalaEspecial.blocoLocalizacaoSalaEspecial,
            andar : req.body.localizacaoSalaEspecial.andarLocalizacaoSalaEspecial
        },
        capacidade : req.body.capacidadeSalaEspecial
    };
    res.status(201).json(data);
})

/* POST /salasEspeciais/{id}/alterar. */
>>>>>>> Stashed changes
router.post('/:id_salaespecial/alterar', function(req, res) {
    const id = req.params.id_salaespecial;
    const data = {
        numero : req.body.numeroSalaEspecial,
<<<<<<< Updated upstream
        localizacao : req.body.localizacaoSalaEspecial,
        capacidade : req.body.capacidadeSalaEspecial
    };
    res.status(200).json(data);
=======
        nome : req.body.nomeSalaEspecial,
        localizacao : {
            bloco : req.body.localizacaoSalaEspecial.blocoLocalizacaoSalaEspecial,
            andar : req.body.localizacaoSalaEspecial.andarLocalizacaoSalaEspecial
        },
        capacidade : req.body.capacidadeSalaEspecial
    };
    res.status(200).json(data);
>>>>>>> Stashed changes
>>>>>>> Stashed changes
});

/* GET /salasEspeciais/{id}/excluir. */
router.get('/:id_salaespecial/excluir', function(req, res) {
    const id = req.params.id_salaespecial
    res.status(200).json({
        id : id
    });
});

module.exports = router;
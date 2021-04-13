var express = require('express');
var router = express.Router();

/* GET /salas/ */
<<<<<<< Updated upstream
router.get('/', function(req, res) {
    res.status(200).json([
        {
            id : 5,
            numero: 222,
            localizacao: ['B', '2º andar'],
            capacidade: 44,
=======
<<<<<<< Updated upstream
router.get('/', function(req, res, next) {
    res.json({
        mensagem : 'GET Salas',
        id : 5,
        numeroSala: 222,
        localizacao: ['B', '2º andar'],
        capacidade: 44,
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
router.post('/cadastrar', function(req, res) {
    const data = {
        numero : req.params.numeroSala,
        localizacao : req.params.localizacaoSala,
        capacidade : req.params.capacidadeSala,
    };
    res.status(201).send(data);
=======
router.post('/cadastrar', function(req, res, next) {
    const sala = req.params.sala
    res.status(201).send({
        mensagem : 'POST Cadastrar Sala',
        id : 1,
        numeroSala : 331,
        localizacao : ['A', '3º andar'],
        capacidade : 40,
    })
=======
router.get('/', function(req, res) {
    res.status(200).json([
        {
            id : 5,
            numero: 222,
            localizacao: {
                bloco : "B",
                andar : "2º andar"
            },
            capacidade: 44,
        },
        {
            id : 7,
            numero: 123,
            localizacao: {
                bloco : "C",
                andar : "1º andar"
            },
            capacidade: 33
        }
    ]);
});

/* POST /salas/cadastrar */
router.post('/cadastrar', function(req, res) {
    console.log(req);
    const data = {
        numero : req.body.numeroSala,
        localizacao : {
            bloco : req.body.localizacaoSala.blocoLocalizacaoSala,
            andar : req.body.localizacaoSala.andarLocalizacaoSala
        },
        capacidade : req.body.capacidadeSala
    };
    res.status(201).send(data);
>>>>>>> Stashed changes
>>>>>>> Stashed changes
})

/* POST /salas/{id}/alterar */
router.post('/:id_sala/alterar', function(req, res, next) {
<<<<<<< Updated upstream
    const id = req.params.id_sala;
    const data = {
        numero : req.params.numeroSala,
        localizacao : req.params.localizacaoSala,
        capacidade : req.params.capacidadeSala,
    };
    res.status(200).json(data);
=======
<<<<<<< Updated upstream
    const id = req.params.id_sala
    const sala = req.params.sala
    res.json({
        mensagem : 'GET Alterar Sala',
        id : 1,
        numeroSala: 321,
        localizacao: ['B', '2º andar'],
        capacidade: 35,
    })
=======
    const id = req.params.id_sala;
    const data = {
        numero : req.body.numeroSala,
        localizacao : {
            bloco : req.body.localizacaoSala.blocoLocalizacaoSala,
            andar : req.body.localizacaoSala.andarLocalizacaoSala
        },
        capacidade : req.body.capacidadeSala
    };
    res.status(200).json(data);
>>>>>>> Stashed changes
>>>>>>> Stashed changes
});

/* GET /salas/{id}/excluir */
router.get('/:id_sala/excluir', function(req, res, next) {
    const id = req.params.id_sala;
    res.status(200).json({
        id : id
    })
});

module.exports = router;
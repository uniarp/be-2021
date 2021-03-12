var express = require('express');
var router = express.Router();

/* GET /salas/ */
router.get('/', function(req, res, next) {
    res.status(200).send({
        mensagem : 'GET Salas',
        id : 5,
        numeroSala: 222,
        localizacao: ['B', '2º andar'],
        capacidade: 44,
        },
        {
        id : 7,
        numeroSala: 123,
        localizacao: ['C', '1º andar'],
        capacidade: 33
    })
});

/* POST /salas/cadastrar */
router.post('/cadastrar', function(req, res, next) {
    const sala = req.params.sala
    res.status(201).send({
        mensagem : 'POST Cadastrar Sala',
        id : 1,
        numeroSala : 331,
        localizacao : ['A', '3º andar'],
        capacidade : 40,
    })
})

/* POST /salas/{id}/alterar. */
router.post('/:id_sala/alterar', function(req, res, next) {
    const id = req.params.id_sala
    const sala = req.params.sala
    res.status(200).send({
        mensagem : 'GET Alterar Sala',
        id : 1,
        numeroSala: 321,
        localizacao: ['B', '2º andar'],
        capacidade: 35,
    })
});

/* GET /salas/{id}/excluir. */
router.get('/:id_sala/excluir', function(req, res, next) {
    const id = req.params.id_sala
    res.status(200).send({
        mensagem : 'GET ID excluir Sala',
        id : id
    })
});

module.exports = router;
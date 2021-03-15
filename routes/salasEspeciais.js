var express = require('express');
var router = express.Router();

/* GET /salasEspeciais/ */
router.get('/', function(req, res, next) {
    res.status(200).send({
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
});

/* POST /salasEspeciais/cadastrar */
router.post('/cadastrar', function(req, res, next) {
    const salaEspecial = req.params.salaEspecial
    res.status(201).send({
        mensagem : 'POST Cadastrar Sala Especial',
        id : 1,
        numeroSala : 331,
        localizacao : ['A', '3º andar'],
        capacidade : 40,
    })
})

/* POST /salasEspeciais/{id}/alterar. */
router.post('/:id_salaEspecial/alterar', function(req, res, next) {
    const id = req.params.id_salaEspecial
    const salaEspecial = req.params.salaEspecial
    res.status(200).send({
        mensagem : 'GET Alterar Sala Especial',
        id : 1,
        numeroSala: 321,
        localizacao: ['B', '2º andar'],
        capacidade: 35,
    })
});

/* GET /salasEspeciais/{id}/excluir. */
router.get('/:id_salaEspecial/excluir', function(req, res, next) {
    const id = req.params.id_salaEspecial
    res.status(200).send({
        mensagem : 'GET ID excluir Sala Especial',
        id : id
    })
});

module.exports = router;
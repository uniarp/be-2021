var express = require('express');
var router = express.Router();

/* GET /questoes/ */
router.get('/', function(req, res, next) {
    res.status(200).send({
        mensagem : ' GET Questao',
        id : 12,
        pergunta : 'O que fazer quando o bicho pega?',
        resposta : 'Fazer o que for necessário.'
    })
});

/* GET /questoes/{id}/alterar. */
router.get('/:id_questao/alterar', function(req, res, next) {
    const id = req.params.id_questao
    res.status(200).send({
        mensagem : 'GET Alterar Questao',
        id : id
    })
});

/* POST /questoes/cadastrar */
router.post('/cadastrar', function(req, res, next) {
    res.status(201).send({
        mensagem : 'POST Cadastrar Questao',
        id : 12,
        pergunta : 'O que fazer quando o bicho pega?',
        resposta : 'Fazer o que for necessário.'
    })
})

/* GET /questoes/{id}/excluir. */
router.get('/:id_questao/excluir', function(req, res, next) {
    const id = req.params.id_questao
    res.status(200).send({
        mensagem : 'GET Excluir Questao',
        id : id
    })
});

module.exports = router;
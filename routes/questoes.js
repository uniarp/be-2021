var express = require('express');
var router = express.Router();

/* GET /questoes/ */
router.get('/', function(req, res, next) {
    res.status(200).json([
        {
            id : 12,
            pergunta : "O que fazer quando o bicho pega?",
            resposta : "Fazer o que for necessário."
        },
        {
            id : 16,
            pergunta : "O que fazer quando erramos o merge?",
            resposta : "Resolve os conflitos"
        }
    ]);
});

/* POST /questoes/cadastrar */
router.post('/cadastrar', function(req, res, next) {
    const data = {
        pergunta : req.body.perguntaQuestao,
        resposta : req.body.respostaQuestao
    };
    res.status(201).json(data);
});

/* POST /questoes/{id}/alterar. */
router.post('/:id_questao/alterar', function(req, res, next) {
    const id = req.params.id_questao;
    const data = {
        pergunta : req.body.perguntaQuestao,
        resposta : req.body.respostaQuestao
    };
    res.status(200).json(data);
});

/* GET /questoes/{id}/excluir. */
router.get('/:id_questao/excluir', function(req, res, next) {
    const id = req.params.id_questao;
    res.status(200).json({
        id : id
    });
});

module.exports = router;
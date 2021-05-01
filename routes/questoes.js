var express = require('express');
var router = express.Router();
const pool =require('../bd')
/* GET /questoes/ */
router.get('/', async(req, res, next)=> {
    try {
        const query = await pool.query('select * from questao')
        res.status(200).json(query.rows)
        
    } catch (error) {
        res.status(400).send({
            mensagem:error.message
        })
    }

});

/* POST /questoes/cadastrar */
router.post('/cadastrar', async(req, res, next)=> {
    const data = {
        pergunta : req.body.perguntaQuestao,
        resposta : req.body.respostaQuestao
    };
    try {
        await pool.query(
            "INSERT INTO questao  (perguntaQuestao, respostaQuestao) VALUES($1,$2) RETURNING *",[pergunta,resposta]
        );
        res.status(400).send({
            messagem:"Questão cadastrada com sucesso"
        })     
    } catch (error) {
        res.status(400).send({
            mensagem:error.message
        })  
    }
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
router.get('/:id_questao/excluir', async(req, res, next)=> {
    try {
        const id = req.params.id_questao;
        const ok =await pool.query('delete from questao where id=$1',[id]); 
        res.status(200).send({
            mensagem:"Questão excluida com sucesso"
        }); 
    } catch (error) {
        res.status(400).send({
            mensagem:error.message
        }) 
    }
    
});

module.exports = router;
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
    try {
        const pergunta = req.body.pergunta
        const resposta = req.body.resposta
    
        await pool.query(
            "INSERT INTO questao  (pergunta, resposta) VALUES($1,$2) RETURNING *",[pergunta,resposta]
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
router.post('/:id_questao/alterar', async(req, res, next)=> {
    try {
        const id = req.params.id_questao
        const pergunta = req.body.pergunta
        const resposta = req.body.resposta

        await pool.query("UPDATE questao SET pergunta=$1, resposta=$2 WHERE id=$3",[pergunta,resposta,id]);
        res.status(200).send({
            message:'Questão alterada com sucesso'
        })  
        
    } catch (error) {
        res.status(400).send({
            mensagem:error.message
        })
    }
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
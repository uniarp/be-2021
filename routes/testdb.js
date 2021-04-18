var express = require('express');
var router = express.Router()
const pool =require('../bd')

//listar todas as questões
router.get('/',async (req,res)=>{
    try{
        const query = await pool.query("SELECT * FROM questao")
        res.status(200).json(query.rows)
    }catch(error){
        res.status(400).send({
            mensagem:error.message
        })
    }
})

//cadastrar uma questao
router.post('/cadastro', async (req,res)=>{
    try{
        const pergunta=req.body.pergunta;
        const resposta=req.body.resposta;
        await pool.query("INSERT INTO questao (pergunta, resposta) VALUES($1,$2) RETURNING *",[pergunta,resposta]
        );
        res.status(200).send({
            mensagem:"Pergunta cadastrada"
        })
    }catch(err){
        res.status(400).send({
            mensagem:err.message
        })
    }
})

//alterar uma questao
router.post('/:id/alterar', async (req,res)=>{
    console.log(req.params.id)
    try{
        const id=req.params.id;
        const pergunta=req.body.pergunta;
        const resposta=req.body.resposta
        console.log(resposta,pergunta)
        await pool.query("UPDATE questao SET pergunta=$1, resposta=$2 WHERE id=$3",[pergunta,resposta,id]);
        res.status(200).send({
            message:'questão alterada'
        })
    }catch(err){
        res.status(304).send({
            mensagem:err.message
        })
    }
})

//excluir  uma pergunta
router.get('/:id/excluir', async (req,res)=>{
    try{
        const id=req.params.id
        const ok =await pool.query('delete from questao where id=$1',[id]);
        res.status(200).send({
            mensagem:"questao excluida"
        });
    }catch(error){
        res.status(304).send({
            mensagem:error.message
        })
    }
})
module.exports=router
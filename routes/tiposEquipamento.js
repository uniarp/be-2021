var express = require('express');
var router = express.Router();
const pool =require('../bd')
/* GET /tiposEquipamento/ */
router.get('/', async(req, res)=> {
    try{
        const query = await pool.query("SELECT * FROM tipoequipamento")
        res.status(200).json(query.rows)
    }catch(error){
        res.status(400).send({
            mensagem:error.message
        })
    }
});

/* POST /tiposEquipamento/cadastrar */
router.post('/cadastrar', async(req, res)=> {
    try{
        const nome =req.body.nome;
        await pool.query("INSERT INTO tipoequipamento (nome) VALUES($1) RETURNING *",[nome]);
        res.status(200).send({
            mensagem:"Tipo equipamento  cadastrado"
        })
    }catch(err){
        res.status(400).send({
            mensagem:err.message
        })
    } 
});

/* POST /tiposEquipamento/{id}/alterar. */
router.post('/:id/alterar', async(req, res, next)=> {
    try{
        const id=req.params.id;
        const nome=req.body.nome; 
        await pool.query("UPDATE tipoequipamento SET nome=$1 WHERE id=$2",[nome,id]);
        res.status(200).send({
            message:'Tipo de equipamento alterado'
        })
    }catch(err){
        res.status(304).send({
            mensagem:err.message
        })
    }
});

/* GET /tiposEquipamento/{id}/excluir. */
router.get('/:id/excluir', async(req, res, next)=> {
    try{
        const id=req.params.id
        const ok =await pool.query('delete from tipoequipamento where id=$1',[id]);
        res.status(200).send({
            mensagem:"Tipo de equipamento excluido"
        });
    }catch(error){
        res.status(304).send({
            mensagem:error.message
        })
    }
});

module.exports = router;
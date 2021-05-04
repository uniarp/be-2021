var express = require('express');
const pool = require('../bd');
var router = express.Router();

/* GET /chaves/ */
router.get('/', async(req, res)=> {
    try{
        const query = await pool.query(`SELECT * FROM chave k INNER JOIN sala s
                                        ON k.id_sala=s.id`)
        res.status(200).json(query.rows)
    }catch(error){
        res.status(400).send({
            mensagem:error.message
        })
    }
});

/* POST /chaves/cadastrar */
router.post('/cadastrar', async(req, res)=> {
   try{
    const id_sala=req.body.id_sala
    await pool.query('insert into chave (id_sala) values ($1) RETURNING *',[id_sala]);
    res.status(200).send({
        mensagem:"Chave cadastrada com sucesso"
    })
   }
   catch(err){
    res.status(400).send({
        mensagem:err.message
    })
   }
})

/* POST /chaves/{id}/alterar. */
router.post('/:id_chave/alterar', async(req, res, next)=> {
    const id = req.params.id_chave;
    const id_sala = req.body.id_sala;
    try{
        await pool.query("UPDATE chave SET id_sala=$1 WHERE id=$2",[id_sala,id]);
        res.status(200).send({
            message:'Dados alterados com sucesso'
        })
    }catch(err){
        res.status(304).send({
            mensagem:err.message
        })
    }
});

/* GET /chaves/{id}/excluir. */
router.get('/:id_chave/excluir', async(req, res, next)=> {
    const id = req.params.id_chave;
    try{
        const ok =await pool.query('delete from chave where id=$1',[id]);
        res.status(200).send({
            mensagem:"Chave excluida com sucesso"
        });
    }catch(error){
        res.status(304).send({
            mensagem:error.message
        })
    }
});

module.exports = router;
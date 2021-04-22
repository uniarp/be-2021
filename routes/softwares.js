var express = require('express');
var router = express.Router();
const pool =require('../bd')

/* GET /softwares/ */
router.get('/', async(req, res)=>{
    try{
        const query = await pool.query("SELECT * FROM software")
        res.status(200).json(query.rows)
    }catch(error){
        res.status(400).send({
            mensagem:error.message
        })
    }
});

/* POST /softwares/cadastrar */
router.post('/cadastrar', async(req, res)=>{
    const data = {
        nome : req.body.nome,
        descricao : req.body.descricao
    };
    try{
        await pool.query(`INSERT INTO software (nome,descricao)
         VALUES($1,$2) RETURNING 
         *`,[data.nome,data.descricao]
        );
        res.status(200).send({
            mensagem:"Software cadastrado com sucesso"
        })
    }catch(err){
        res.status(400).send({
            mensagem:err.message
        })
    }
})

/* POST /softwares/{id}/alterar. */
router.post('/:id/alterar', async(req, res)=> {
    try{
        const id = req.params.id;
        const data = {
            nome : req.body.nome,
            descricao : req.body.descricao
        }
        await pool.query("UPDATE software SET nome=$1, descricao=$2 WHERE id=$3",[data.nome,data.descricao,id]);
        res.status(200).send({
            message:'Software alterada com sucesso'
        })
    }catch(err){
        res.status(304).send({
            mensagem:err.message
        })
    }
});

/* GET /salasEspeciais/{id}/excluir. */
router.get('/:id/excluir', async(req, res)=>{
    try{
        const id = req.params.id
        await pool.query('delete from software where id=$1',[id])
        res.status(200).send({
            mensagem:"Software excluido"
        });
    }catch(error){
        res.status(304).send({
            mensagem:error.message
        })
    }
});
module.exports = router;
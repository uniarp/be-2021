var express = require('express');
var router = express.Router();
const pool = require('../bd');
/* GET /materiais */
router.get('/', async (req, res)=> {
    try{
        const query = await pool.query("SELECT * FROM material")
        res.status(200).json(query.rows)
    }catch(error){
        res.status(400).send({
            mensagem:error.message
        })
    }
});

/* POST /materiais/cadastrar */
router.post('/cadastrar', async (req, res)=> {
    try{
        const data= {
        nome :req.body.nome,
        qtd :req.body.qtd,
        descricao :req.body.descricao,
        marca :req.body.marca
        };
        await pool.query("insert into material (nome,qtd,descricao,marca) values ($1,$2,$3,$4) RETURNING *",[data.nome,data.qtd,data.descricao,data.marca]
        );
        res.status(200).send({
            mensagem:"Material cadastrado com sucesso"
        })
    }catch(err){
        res.status(400).send({
            mensagem:err.message
        })
    }
});

/* POST /materiais/{id}/alterar */
router.post('/:id/alterar', async (req, res)=> {
    const id = req.params.id;
    const data = {
        nome : req.body.nome,
        qtd : req.body.qtd,
        descricao : req.body.descricao,
        marca :  req.body.marca
    }
    try{
        await pool.query("UPDATE material SET nome=$1, qtd=$2,descricao=$3,marca=$4 WHERE id=$5",[data.nome,data.qtd,data.descricao,data.marca,id]);
        res.status(200).send({
            message:'Material alterado com sucesso'
        })
    }catch(err){
        res.status(304).send({
            mensagem:err.message
        })
    }
});

/* GET /materiais/{id}/excluir */
router.get('/:id/excluir', async(req, res)=>{
    const id = req.params.id
    try{
        const id=req.params.id
        const ok =await pool.query('delete from material where id=$1',[id]);
        res.status(200).send({
            mensagem:"Material excluido com sucesso"
        });
    }catch(error){
        res.status(304).send({
            mensagem:error.message
        })
    }
});

module.exports = router;
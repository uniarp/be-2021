var express = require('express');
var router = express.Router();
const pool = require('../bd')
/* GET /professores */
router.get('/', async(req, res)=> {
    try {
        const retorno = await pool.query('select * from professor');
        res.status(200).json(retorno.rows)
    } catch(erro) {
        res.status(400).send({mensagem: erro.message});
    }
});

/* POST /professores/cadastrar */
router.post('/cadastrar', async(req, res)=> {
    try {
        const data = {
        login : req.body.login,
        senha : req.body.senha,
        nivel : req.body.nivel,
        nomeCompleto : req.body.nomeCompleto,
        email : req.body.email
        };
        await pool.query("insert into professor(login,senha,nivel,nomeCompleto,email) values ($1,$2,$3,$4,$5)RETURNING *",[data.login,data.senha,data.nivel,data.nomeCompleto,data.email]
        );
        res.status(200).send({
            mensagem: "Professor cadastrado com sucesso"
        })
    }catch(err){
    res.status(400).send({
            mensagem:err.message
        })
    }

});

/* POST /professores/{id}/alterar. */
router.post('/:id/alterar', async(req, res)=> {
    const id = req.params.id
    const data = {
        login : req.body.login,
        senha : req.body.senha,
        nivel : req.body.nivel,
        nomeCompleto : req.body.nomeCompleto,
        email : req.body.email
    }
    try{
        await pool.query("UPDATE professor SET login=$1, senha=$2,nivel=$3,nomecompleto=$4,email=$5 WHERE id=$6",[data.login,data.senha,data.nivel,data.nomeCompleto,data.email,id]);
        res.status(200).send({
            message:'Professor alterado com sucesso'
        })
    }catch(err){
        res.status(304).send({
            mensagem:err.message
        })
    }
});


/* GET /professores/{id}/excluir. */
router.get('/:id/excluir', async(req, res)=>{
    const id = req.params.id
    try{
        const id=req.params.id
        const ok =await pool.query('delete from professor where id=$1',[id]);
        res.status(200).send({
            mensagem:"Professor excluido com sucesso"
        });
    }catch(error){
        res.status(304).send({
            mensagem:error.message
        })
    }
});

module.exports = router;
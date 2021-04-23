var express = require('express');
var router = express.Router();
const pool = require('../bd');
/* GET /usuarios */
router.get('/', async (req, res)=> {
    try{
        const query = await pool.query("SELECT * FROM usuario")
        res.status(200).json(query.rows)
    }catch(error){
        res.status(400).send({
            mensagem:error.message
        })
    }
});


/* POST /usuarios/cadastrar */
router.post('/cadastrar', async (req, res)=> {
    try{
        const login = req.body.login;
        const senha = req.body.senha;
        const nivel = req.body.nivel;
        const nomeCompleto = req.body.nomeCompleto;
        const email = req.body.email
        await pool.query("insert into usuario (login,senha,nivel,nomecompleto,email) values ($1,$2,$3,$4,$5) RETURNING *",[login,senha,nivel,nomeCompleto,email]
        );
        res.status(200).send({
            mensagem:"Usuário cadastrado com sucesso"
        })
    }catch(err){
        res.status(400).send({
            mensagem:err.message
        })
    }
});

/* POST /usuarios/{id}/alterar. */
router.post('/:id/alterar', async (req, res)=> {
    const id = req.params.id
    const data = {
        login : req.body.login,
        senha : req.body.senha,
        nivel : req.body.nivel,
        nomeCompleto : req.body.nomeCompleto,
        email : req.body.email
    }
    try{
        await pool.query("UPDATE usuario SET login=$1, senha=$2,nivel=$3,nomecompleto=$4,email=$5 WHERE id=$6",[data.login,data.senha,data.nivel,data.nomeCompleto,data.email,id]);
        res.status(200).send({
            message:'Usuário alterado com sucesso'
        })
    }catch(err){
        res.status(304).send({
            mensagem:err.message
        })
    }
});

/* GET /usuarios/{id}/excluir. */
router.get('/:id/excluir', async(req, res)=>{
    const id = req.params.id
    try{
        const id=req.params.id
        const ok =await pool.query('delete from usuario where id=$1',[id]);
        res.status(200).send({
            mensagem:"Usuário excluido com sucesso"
        });
    }catch(error){
        res.status(304).send({
            mensagem:error.message
        })
    }
});

module.exports = router;
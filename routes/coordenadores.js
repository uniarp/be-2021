const { request } = require('express');
var express = require('express');
var router = express.Router();
const pool = require('../bd')

/* listar todos os coordenadores */
router.get('/', async(req, res)=> {
    try {
        const query = await pool.query('SELECT * FROM coordenador')
        res.status(200).json(query.rows)
    }catch(error) {
        res.status(400).send({
            mensagem:error.message
        })
    }
});

/* POST /coordenadores/cadastrar */
router.post('/cadastrar', async(req, res)=> {
    try {
        const data  = {
            login : req.body.login,
            senha : req.body.senha,
            nivel : req.body.nivel,
            nomeCompleto : req.body.nomeCompleto,
            email : req.body.email
        };
        console.log(data)
        const query = `INSERT INTO coordenador (login,senha,nivel,nomeCompleto,email) 
            VALUES ('${data.login}',
                '${data.senha}',
                '${data.nivel}',
                '${data.nomeCompleto}',
                '${data.email}')`
        await pool.query(query) 
        res.status(200).send({
            mensagem:"Cadastro bem sucedido!"
        })
    }catch(error) {
        res.status(400).send({
            mensagem:error.message
        })
    }
});

/* POST /coordenadores/{id}/alterar */
router.post('/:id/alterar', async(req, res)=> {
    try {
        const data = {
            id : req.params.id,
            login : req.body.login,
            senha : req.body.senha,
            nivel : req.body.nivel,
            nomeCompleto : req.body.nomeCompleto,
            email : req.body.email
        }
        console.log(data.id)
        const query = `UPDATE coordenador SET login='${data.login}',
                         senha='${data.senha}',
                         nivel='${data.nivel}',
                         nomeCompleto='${data.nomeCompleto}',
                         email='${data.email}' WHERE id='${data.id}'`;
        await pool.query(query)
        res.status(200).send({
            message:'Coordenador Alterado!'
        })
    }catch(error){
        res.status(304).send({
            mensagem:error.message
        })
    }
});

/* GET /coordenadores/{id}/excluir */
router.get('/:id/excluir', async(req, res)=> {
    try{
        const id =req.params.id;
        const query =`DELETE FROM coordenador WHERE id='${id}'`;
        await pool.query(query)
        res.status(200).send({
            mensagem:"Coordenador Excluído!"
        });
    }catch(error){
        res.status(304).send({
            mensagem:error.message
        })
    }
})

module.exports = router;
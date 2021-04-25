var express = require('express');
var router = express.Router();
const pool = require('../bd');

/* GET /cursos */
router.get('/', async(req, res) => {
    try {
        const query = await pool.query('SELECT * FROM curso')
        res.status(200).json(query.rows)
    }catch(error) {
        res.status(400).send({
            mensagem:error.message
        })
    }
});

/* POST /cursos/cadastrar */
router.post('/cadastrar', async(req, res)=> {
    try {
        const data = {
            nome : req.body.nome
        };
        console.log(data)
        const query = `INSERT INTO curso (nome) 
            VALUES ('${data.nome}')`
        await pool.query(query) 
        res.status(200).send({
            mensagem:"Cadastro bem sucedido!"
        })
    }catch(err) {
        res.status(400).send({
            mensagem:err.message
        })
    }
});

/* POST /cursos/{id}/alterar */
router.post('/:id/alterar', async(req, res)=> {
    try {
        const data = {
            id : req.params.id,
            nome : req.body.nome
        }
        console.log(data.id)
        const query = `UPDATE curso SET nome='${data.nome}'
                         WHERE id='${data.id}'`;
        await pool.query(query)
        res.status(200).send({
            message:'Curso Alterado!'
        })
    }catch(err){
        res.status(304).send({
            mensagem:err.message
        })
    }
});

/* GET /cursos/{id}/excluir */
router.get('/:id/excluir', async(req, res)=> {
    try{
        const id =req.params.id;
        const query =`DELETE FROM curso WHERE id='${id}'`;
        await pool.query(query)
        res.status(200).send({
            mensagem:"Curso Excluído!"
        });
    }catch(error){
        res.status(304).send({
            mensagem:error.message
        })
    }
});

module.exports = router;
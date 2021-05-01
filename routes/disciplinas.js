var express = require('express');
const pool = require('../bd');
var router = express.Router();

/* GET /disciplinas */
router.get('/', async(req, res)=> {
    try{
        const data = {
            nome : req.body.nome,
            periodo: req.body.periodo,
            diaSemana : req.body.diasemana,
            id_professor : req.body.id_professor
        }
        const query = await pool.query(`SELECT * FROM disciplina disc INNER JOIN professor p
                                        ON disc.id_professor=p.id`)
        res.status(200).json(query.rows)
    } catch (error) {
        res.status(400).send({
            mensagem:error.message
        })
    }
});

/* POST /disciplinas/cadastrar */
router.post('/cadastrar', async(req, res)=> {
    try {
        const data = {
            nome : req.body.nome,
            periodo : req.body.periodo,
            diaSemana : req.body.diaSemana,
            id_professor : req.body.id_professor
        };
        const query = `INSERT INTO disciplina (nome, periodo, diasemana, id_professor)
                        VALUES ('${data.nome}','${data.periodo}','${data.diaSemana}',
                        '${data.id_professor}')`
        await pool.query(query)
        console.log(data)
        res.status(200).send({
            mensagem : "Cadastro bem sucedido!"
        })
    }catch (error) {
        res.status(400).send({
            mensagem:error.message
        })
    }
});

/* POST /disciplinas/{id}/alterar */
router.get('/:id_disciplina/alterar', async(req, res)=> {
    try {
        const data = {
            id : req.params.id,
            nome : req.body.nome,
            periodo : req.body.periodo,
            diaSemana : req.body.diaSemana,
            id_professor : req.body.id_professor
        };
        const query = `UPDATE disciplina SET nome='${data.nome}',
                        periodo='${data.periodo}',diasemana='${data.diaSemana}',
                        id_professor='${data.id_professor}' WHERE id='${data.id}'`;
        await pool.query(query)
        res.status(200).send({
            message:'Disciplina Alterada!'
        })
    } catch (error) {
        res.status(304).send({
            mensagem:err.message
        })
    }
});

/* GET /disciplinas/{id}/excluir */
router.get('/:id/excluir', async(req, res)=> {
    try{
        const id =req.params.id;
        const query =`DELETE FROM disciplina WHERE id='${id}'`;
        await pool.query(query)
        res.status(200).send({
            mensagem:"Disciplina Excluída!"
        });
    }catch(error){
        res.status(304).send({
            mensagem:error.message
        })
    }
});

module.exports = router;
var express = require('express');
const pool = require('../bd');
var router = express.Router();

/* GET /disciplinas */
router.get('/', async(req, res)=> {
    try{
        const query = await pool.query(`SELECT disc.*,p.nomecompleto as nomeProfessor,c.nome as nome_curso
                                         FROM disciplina disc INNER JOIN professor p
                                        ON disc.id_professor=p.id INNER JOIN curso c
                                        ON disc.id_curso=c.id`)
        console.log(query.rows)
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
            id_professor : req.body.id_professor,
            id_curso : req.body.id_curso
        };
        const query = `INSERT INTO disciplina (nome, periodo, diasemana, id_professor, id_curso)
                        VALUES ('${data.nome}','${data.periodo}',ARRAY[${data.diaSemana}],
                        '${data.id_professor}','${data.id_curso}')`
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
router.post('/:id/alterar', async(req, res)=> {
    try {
        const data = {
            id : req.params.id,
            nome : req.body.nome,
            periodo : req.body.periodo,
            diaSemana : req.body.diaSemana,
            id_professor : req.body.id_professor,
            id_curso : req.body.id_curso
        };
        const query = `UPDATE disciplina SET nome='${data.nome}',
                        periodo='${data.periodo}',diasemana='${data.diaSemana}',
                        id_professor='${data.id_professor}', id_curso='${data.id_curso}'
                         WHERE id='${data.id}'`;
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
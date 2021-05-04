var express = require('express');
const pool = require('../bd');
var router = express.Router();

/* GET /entregasChave/ */
router.get('/', async(req, res)=> {
    try{
        const query = await pool.query(`SELECT * FROM entregachave ec inner 
            join chave c on ec.id_chave=c.id inner join sala s on s.id=c.id_sala
            inner join professor p on p.id=ec.id_professor`)
        res.status(200).json(query.rows)
    }catch(error){
        res.status(400).send({
            mensagem:error.message
        })
    }
});

/* POST /entregasChave/cadastrar */
router.post('/cadastrar', async(req, res)=> {
    const data = {
        dataHoraEntrega : req.body.dataHoraEntrega,
        id_chave:req.body.id_chave,
        id_professor:req.body.id_professor
    };
    try{
        await pool.query(`insert into entregachave (datahoraentrega,id_professor,id_chave) values(
            $1,$2,$3) RETURNING *`,[data.dataHoraEntrega,data.id_professor,data.id_chave]
        );
        res.status(200).send({
            mensagem:"Dados cadastrados com sucesso"
        })
    }catch(err){
        res.status(400).send({
            mensagem:err.message
        })
    }
})

/* POST /entregasChave/{id}/alterar. */
router.post('/:id_entregaChave/alterar', async(req, res)=> {
    const id = req.params.id_entregaChave;
    const data = {
        dataHoraEntrega : req.body.dataHoraEntrega,
        dataHoraDevolucao : req.body.dataHoraDevolucao,
        id_chave:req.body.id_chave,
        id_professor:req.body.id_professor
    };
    try{
        await pool.query(`UPDATE entregachave SET datahoraentrega=$1, datahoradevolucao=$2,id_professor=$3,
        id_chave=$4 WHERE id=$5`,[data.dataHoraEntrega,data.dataHoraDevolucao,data.id_professor,data.id_chave,id]);
        res.status(200).send({
            message:'Dados alterados com sucesso'
        })
    }catch(err){
        res.status(304).send({
            mensagem:err.message
        })
    }
});

/* GET /entregasChave/{id}/excluir. */
router.get('/:id_entregaChave/excluir', async(req, res)=> {
    const id = req.params.id_entregaChave;
    try{ 
        await pool.query('delete from entregachave where id=$1',[id]);
        res.status(200).send({
            mensagem:"Dados excluidos com sucesso"
        });
    }catch(error){
        res.status(304).send({
            mensagem:error.message
        })
    }
});

module.exports = router;
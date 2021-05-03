var express = require('express');
const pool = require('../bd');
var router = express.Router();

/* GET /entregasChave/ */
router.get('/', async(req, res)=> {
    try{
        const query = await pool.query(`SELECT * FROM entregachave ec inner 
            join chave c on ec.id_chave=c.id inner join sala s on s.id=c.id_sala`)
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
        dataHoraDevolucao : req.body.dataHoraDevolucao,
        id_chave:req.body.id_chave
    };
    try{
        await pool.query(`insert into entregachave (datahoraentrega,id_chave) values(
            $1,$2) RETURNING *`,[data.dataHoraEntrega,data.id_chave]
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
router.post('/:id_entregaChave/alterar', async(req, res, next)=> {
    const id = req.params.id_entregaChave;
    const data = {
        dataHoraEntrega : req.body.dataHoraEntrega,
        dataHoraDevolucao : req.body.dataHoraDevolucao,
        id_chave:req.body.id_chave
    };
    try{
        await pool.query(`UPDATE entregachave SET datahoraentrega=$1, datahoradevolucao=$2,id_chave=$3 WHERE id=$4`,[data.dataHoraEntrega,data.dataHoraDevolucao,data.id_chave,id]);
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
router.get('/:id_entregaChave/excluir', async(req, res, next)=> {
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
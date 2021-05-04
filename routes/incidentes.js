var express = require("express");
var router = express.Router();
const pool = require('../bd');
/* GET /incidentes/ */
router.get('/', async (req, res)=> {
    try{
        const query = await pool.query("select * from incidente a  inner join sala b on a.id_sala= b.id inner join professor c  on a.id_professor = c.id")
        res.status(200).json(query.rows)
    }catch(error){
        res.status(400).send({
            mensagem:error.message
        })
    }
});


/* POST /incidentes/cadastrar */
router.post('/cadastrar', async (req, res)=> {
    try{
    const data = {
        descricao : req.body.descricao,
        tempoAbertura : req.body.tempoAbertura,
        status : req.body.status,
        tempoFechamento : req.body.tempoFechamento,
        resolucao : req.body.resolucao,
        id_sala: req.body.id_sala,
        id_professor: req.body.id_professor

    };
    await pool.query("insert into incidente (descricao,tempoabertura,status,tempofechamento,resolucao, id_sala,id_professor)values('$1','$2', '$3', '$4', '$5','$6','$7','$8')RETURNING *",[data.descricao,data.tempoAbertura,data.status,data.tempoFechamento,data.resolucao, data.id_sala,data.id_professor])
    res.status(200).send({
        mensagem:"Incidente cadastrado com sucesso"
    })
}catch(err){
    res.status(400).send({
        mensagem:err.message
    })
}
});

/* POST /incidentes/{id}/alterar. */
router.post('/:id/alterar', async (req, res)=> {
    const id = req.params.id;
    const data = {
        descricao : req.body.descricao,
        tempoAbertura : req.body.tempoAbertura,
        status : req.body.status,
        tempoFechamento : req.body.tempoFechamento,
        resolucao : req.body.resolucao,
        id_sala: req.body.id_sala,
        id_professor: req.body.id_professor
    }
    try{
        await pool.query("UPDATE incidente SET descricao =$1, tempoAbertura=$2,status=$3,tempoFechamento=$4,resolucao=$5, id_sala=$6, id_professor=$7 WHERE id=$8",[data.descricao,data.tempoAbertura,data.status,data.tempoFechamento,data.resolucao,data.id_sala, data.id_professor,id]);
        res.status(200).send({
            message:'Incidente alterado com sucesso'
        })
    }catch(err){
        res.status(304).send({
            mensagem:err.message
        })
    }
});

/* GET /incidentes/{id}/excluir. */
router.get('/:id/excluir', async(req, res)=>{
    const id = req.params.id
    try{
        const id=req.params.id
        await pool.query('delete from incidente where id=$1',[id]);
        res.status(200).send({
            mensagem:"Incidente excluido com sucesso"
        });
    }catch(error){
        res.status(304).send({
            mensagem:error.message
        })
    }
});

module.exports = router;
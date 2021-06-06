var express = require('express');
const pool = require('../bd');
var router = express.Router();

/* GET /entregasChave/ */
router.get('/', async(req, res)=> {
    try{
        const query = await pool.query(`
            select ec.*,p.nomecompleto as nome_professor, s.numerosala, ch.id as id_chave from entregachave ec inner join 
            reservasala re on ec.id_reservasala=re.id inner join sala s on s.id=re.id_sala inner join professor
            p on p.id=re.id_professor inner join chave ch on ch.id_sala=s.id
        `)
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
        id_reservasala:req.body.reservasala,
        status:req.body.status
    };
    try{
        await pool.query(`insert into entregachave (datahoraentrega,id_reservasala,status) values(
            $1,$2,$3) RETURNING *`,[data.dataHoraEntrega,data.id_reservasala,data.status]
        );
        res.status(200).send({
            mensagem:"Dados cadastrados com sucesso"
        })
    }catch(err){
        res.status(400).send({
            mensagem:err.message
        })
    }
});

/* POST /entregasChave/{id}/alterar. */
router.post('/:id_entregaChave/alterar', async(req, res)=> {
    const id = req.params.id_entregaChave;
    const data = {
        dataHoraEntrega : req.body.dataHoraEntrega,
        dataHoraDevolucao : req.body.dataHoraDevolucao,
        id_reservasala:req.body.reservasala,
        status:req.body.status
    };
    try{
        await pool.query(`UPDATE entregachave SET datahoraentrega=$1, datahoradevolucao=$2,id_reservasala=$3, status=$4
         WHERE id=$5`,[data.dataHoraEntrega,data.dataHoraDevolucao,data.id_reservasala,data.status,id]);
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
router.post('/:id/updatestatus', async(req, res)=> {
    const id_reserva=req.params.id
    const data={
        status:req.body.status,
        dataDevolucao:req.body.dataDevolucao
    }
    try{
        await pool.query(`update entregachave set status=$1,datahoradevolucao=$2
         where id_reservasala=$3`,[data.status,data.dataDevolucao,id_reserva]
        )
        res.status(200).send({
            message:'Dados alterados com sucesso'
        })
    }catch(err){
        res.status(304).send({
            mensagem:err.message
        })
    }
});
module.exports = router;
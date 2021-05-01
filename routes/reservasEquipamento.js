var express = require('express');
var router = express.Router();
const pool =require('../bd')
/* GET /reservasEquipamento/ */
router.get('/', async (req, res)=>{
    try{
        const query=await pool.query(`select * from reservaequipamento re inner join 
        professor p on p.id=re.id_professor inner join equipamento e on e.id=re.id_equipamento 
        left join usuario u on u.id=re.id_usuario`)
        res.status(200).json(query.rows)
    }catch(err){
        res.status(400).send({
            mensagem:err.message
        })
        // 
    } 
});

/* POST /reservasEquipamento/cadastrar */
router.post('/cadastrar', async (req, res)=> {
    const data = {
        dataEntrega : req.body.dataEntrega,
        dataDevolucao : req.body.dataDevolucao,
        observacao : req.body.observacao,
        status : req.body.status,
        periodo : req.body.periodo,
        idprofessor:req.body.idprofessor,
        idequipamento:req.body.idequipamento,
    };
    try{
        await pool.query(`insert into reservaequipamento (dataentrega,datadevolucao,observacao,status,
            periodo,id_professor,id_equipamento) values($1,$2,$3,$4,$5,$6,$7
            )`,RETURNIN* [data.dataEntrega,data.dataDevolucao,data.observacao,data.status,
                data.periodo,data.idprofessor,data.idequipamento])
            
        res.status(200)
    }catch(err){
        res.status(400).send({
            mensagem:err.message
        })
    } 
});

/* POST /reservasEquipamento/{id}/alterar */
router.post('/:id/alterar', async(req, res)=>{
    const id = req.params.id 
    try{
        const data = {
            dataEntrega : req.body.dataEntrega,
            dataDevolucao : req.body.dataDevolucao,
            observacao : req.body.observacao,
            status : req.body.status,
            periodo : req.body.periodo,
            idprofessor:req.body.idprofessor,
            idequipamento :req.body.idequipamento,
        }
        const idusuario=req.body.idusuario;
        await pool.query(`update reservaequipamento set 
        dataentrega=$1,datadevolucao=$2,observacao=$3,status=$4,periodo=$5
        ,id_professor=$6,id_equipamento=$7,id_usuario=$8 where id=$9`,[
            data.dataEntrega,data.dataDevolucao,data.observacao,data.status,
            data.periodo,data.idprofessor,data.idequipamento,idusuario,id
        ])
        res.status(200).send({
            message:'reserva de equipamento alterada com sucesso'
        })
    }catch(err){
        res.status(304).send({
            mensagem:err.message
        })
    }
});

/* GET /reservasEquipamento/{id}/excluir */
router.get('/:id/excluir',async(req, res)=>{
    try{
        const id=req.params.id
        await pool.query(`delete from reservaequipamento where id='${id}'`);
        res.status(200).send({
            mensagem:"Reserva de equipamento excluida com sucesso"
        });
    }catch(error){
        res.status(304).send({
            mensagem:error.message
        })
    }
});

module.exports = router;
var express = require('express');
var router = express.Router();
const pool =require('../bd')
/* GET /vistorias */
router.get('/', async(req, res)=> {
    try{
        const query = await pool.query("SELECT * FROM vistoria")
        res.status(200).json(query.rows)
    }catch(error){
        res.status(400).send({
            mensagem:error.message
        })
    }
});


/* GET /vistorias/cadastrar */
router.post('/cadastrar', async(req, res)=> {
    const data = {
        emConformidade : req.body.emConformidade,
        data : req.body.data,
        descricao : req.body.descricao,
        periodo : req.body.periodo,
        idequipamento:req.body.idEquipamento,
        idsala:req.body.idSala
    };
    try{
        await pool.query(`INSERT INTO vistoria (emconformidade,data,descricao,periodo,id_equipamento,id_sala)
         VALUES($1,$2,$3,$4,$5,$6) RETURNING 
         *`,[data.emConformidade,data.data,data.descricao,data.periodo,data.idequipamento,data.idsala]
        );
        res.status(200).send({
            mensagem:"Vistoria cadastrada com sucesso"
        })
    }catch(err){
        res.status(400).send({
            mensagem:err.message
        })
    }
});


/* POST /vistorias/{id}/alterar */
router.post('/:id/alterar', async(req, res)=> {
    try{
        const id = req.params.id;
        const data = {
            emConformidade : req.body.emConformidade,
            data : req.body.data,
            descricao : req.body.descricao,
            periodo : req.body.periodo,
            idequipamento:req.body.idEquipamento,
            idsala:req.body.idSala
        } 
        await pool.query("UPDATE vistoria SET emconformidade=$1, data=$2,descricao=$3,periodo=$4,id_equipamento=$5,id_sala=$6 WHERE id=$7",[data.emConformidade,data.data,data.descricao,data.periodo,data.idequipamento,data.idsala,id]);
        res.status(200).send({
            message:'Vistoria alterada com sucesso'
        })
    }catch(err){
        res.status(304).send({
            mensagem:err.message
        })
    }
});


/* GET /vistorias/{id}/excluir */
router.get('/:id/excluir', async(req, res)=> {
    try{
        const id=req.params.id
        const ok =await pool.query('delete from vistoria where id=$1',[id]);
        res.status(200).send({
            mensagem:"Vistoria excluida com sucesso"
        });
    }catch(error){
        res.status(304).send({
            mensagem:error.message
        })
    }
     
});

module.exports = router;

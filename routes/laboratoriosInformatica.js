var express = require('express');
var router = express.Router();
const pool = require('../bd');
/* GET /laboratoriosInformatica/ */
router.get('/', async (req, res)=> {
    try{
        const query = await pool.query("SELECT * FROM laboratorioinformatica")
        res.status(200).json(query.rows)
    }catch(error){
        res.status(400).send({
            mensagem:error.message
        })
    }
});

/* POST /laboratoriosinformatica/cadastrar */
router.post('/cadastrar', async (req, res)=> {
    try{
    const data = {
        numero : req.body.numero,
        numeroSala : req.body.numeroSala,
        localizacao : {
            bloco : req.body.localizacao.blocoLocalizacao,
            andar : req.body.localizacao.andarLocalizacao
        },
        capacidade : req.body.capacidade,
        qtdComputadores : req.body.qtdComputadores,
        numerolaboratorioinformatica: req.body.numerolaboratorioinformatica
        
    };
    await pool.query("insert into laboratioinformatica(numeroSala,localizacao,capacidade,qtdcomputadores,numerolaboratorioinformatica)values($1,$2,$3,$4,$5)RETURNING *",[data.numeroSala,data.localizacao,data.capacidade,data.qtdcomputadores,data.numerolaboratorioinformatica]
    );
        res.status(200).send({
        mensagem:"Laboratório cadastrado com sucesso"
    })
}catch(err){
    res.status(400).send({
        mensagem:err.message
    })
}
});

/* POST /laboratoriosinformatica/{id}/alterar. */
router.post('/:id/alterar', async (req, res)=> {
    const id = req.params.id
    const data = {
        numero : req.body.numero,
        numeroSala : req.body.numeroSala,
        localizacao : {
            bloco : req.body.localizacao.blocoLocalizacao,
            andar : req.body.localizacao.andarLocalizacao
        },
        capacidade : req.body.capacidade,
        qtdComputadores : req.body.qtdComputadores
    };
    try{
        await pool.query("UPDATE laboratorioinformatica SET numeroSala=$1,localizacao=$2,capacidade=$3,qtdcomputadores=$4,numerolaboratorioinformatica=$5 WHERE id=$21",[data.numeroSala,data.localizacao,data.qtdcomputadores,data.numerolaboratorioinformatica,data.bloco,id]);
        res.status(200).send({
            message:'Laboratório alterado com sucesso'
        })
    }catch(err){
        res.status(304).send({
            mensagem:err.message
        })
    }
});

/* GET /laboratoriosinformatica/{id}/excluir. */
router.get('/:id/excluir', async (req, res)=> {
    const id = req.params.id
    try{
        const id=req.params.id
        const ok =await pool.query('delete from laboratorioinformatica where id=$20',[id]);
        res.status(200).send({
            mensagem:"Laboratório excluido com sucesso"
        });
    }catch(error){
        res.status(304).send({
            mensagem:error.message
        })
    }
});

module.exports = router;
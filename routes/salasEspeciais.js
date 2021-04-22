var express = require('express');
var router = express.Router();
const pool =require('../bd')
/* GET /salasEspeciais/ */
router.get('/', async (req, res)=> {
    try{
        const query = await pool.query("SELECT * FROM salaespecial")
        res.status(200).json(query.rows)
    }catch(error){
        res.status(400).send({
            mensagem:error.message
        })
    }
});

/* POST /salasEspeciais/cadastrar */
router.post('/cadastrar', async (req, res)=> {
    try{
        const numero = req.body.numero
        const nome=req.body.nome
        const localizacao={
            bloco:req.body.localizacao.bloco,
            andar:req.body.localizacao.andar
        }
        const capacidade=req.body.capacidade
        await pool.query(
            "INSERT INTO salaespecial (numerosala, localizacao, capacidade,nomesala) VALUES($1,$2,$3,$4) RETURNING *",[numero,localizacao,capacidade,nome]
        );
        res.status(400).send({
            messagem:"Sala especial cadastrada com sucesso"
        })
    }catch(error){
        res.status(400).send({
            mensagem:err.message
        })
    }
})

/* POST /salasEspeciais/{id}/alterar. */
router.post('/:id/alterar', async (req, res)=> {
    try{
        const id = req.params.id;
        const numero = req.body.numero
        const nome=req.body.nome
        const localizacao={
            bloco:req.body.localizacao.bloco,
            andar:req.body.localizacao.andar
        }
        const capacidade=req.body.capacidade
        await pool.query("UPDATE salaespecial SET numerosala=$1, localizacao=$2, capacidade=$3, nomesala=$4 WHERE id=$5",[numero,localizacao,capacidade,nome,id]);
        res.status(200).send({
            message:'Sala especial alterada com sucesso'
        })
    }catch(error){
        res.status(304).send({
            mensagem:err.message
        })
    }
    
});

/* GET /salasEspeciais/{id}/excluir. */
router.get('/:id/excluir', async(req, res, next)=> {
    try{
        const id=req.params.id
        const ok =await pool.query('delete from salaespecial where id=$1',[id]);
        res.status(200).send({
            mensagem:"Sala especial excluida com sucesso"
        });
    }catch(error){
        res.status(304).send({
            mensagem:error.message
        })
    }
});

module.exports = router;
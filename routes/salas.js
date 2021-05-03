var express = require('express');
var router = express.Router();
const pool =require('../bd')
/* GET /salas/ */
router.get('/', async (req, res)=> {
    try {
        const query = await pool.query('select * from sala')
        res.status(200).json(query.rows)
    } catch (error) {
        res.status(400).send({
            mensagem:error.message
        })     
    }
   
});

/* POST /salas/cadastrar */
router.post('/cadastrar', async(req, res)=> {
    try{
        const numero = req.body.numero
        const localizacao = {
            bloco : req.body.localizacao.bloco,
            andar : req.body.localizacao.andar
            }
        const capacidade = req.body.capacidade

        await pool.query(`INSERT INTO sala (numerosala, localizacao, capacidade)
         VALUES($1,$2,$3) RETURNING 
         *`,[numero, localizacao,capacidade]
        );
        res.status(200).send({
            mensagem:"Salas cadastrada com sucesso"
        })
    }catch(err){
        res.status(400).send({
            mensagem:err.message
        })
    }
})

/* POST /salas/{id}/alterar. */
router.post('/:id_sala/alterar', async(req, res, next)=>{
    try {
        const id = req.params.id_sala
        const numero = req.body.numero
        const localizacao = {
            bloco : req.body.localizacao.bloco,
            andar : req.body.localizacao.andar
            }
        const capacidade = req.body.capacidade
    
        await pool.query("UPDATE sala SET numerosala=$1, localizacao=$2, capacidade=$3 WHERE id=$4",[numero,localizacao,capacidade,id]);
        res.status(200).send({
            message:'Sala alterada com sucesso'
        })  
    } catch (error) {
        res.status(304).send({
            mensagem:err.message
        })    
    }
});

/* GET /salas/{id}/excluir. */
router.get('/:id_sala/excluir', async(req, res, next)=> {
    try{
        const id=req.params.id_sala
        const ok =await pool.query('delete from sala where id=$1',[id]);
        res.status(200).send({
            mensagem:"Sala  excluida com sucesso"
        });
    }catch(error){
        res.status(304).send({
            mensagem:error.message
        })
    }
    
});

module.exports = router;
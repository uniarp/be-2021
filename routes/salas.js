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

/* POST /salas/{id}/encontrarSalas */
router.post('/:id/encontrar', async (req, res)=> {
    try {
            data = {id : req.params.id} 
            const query = await pool.query(`SELECT * FROM sala 
                            WHERE id='${data.id}'`)
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
        const data = {
            numero : req.body.numero,
            capacidade : req.body.capacidade,
            bloco : req.body.bloco,
            andar : req.body.andar,
        };
        const query = `INSERT INTO sala (numerosala, capacidade, bloco, andar)
            VALUES('${data.numero}','${data.capacidade}','${data.bloco}','${data.andar}')`
        await pool.query(query);
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
router.post('/:id/alterar', async(req, res)=>{
    try {
        const data = {
            id : req.params.id,
            numero : req.body.numero,
            capacidade : req.body.capacidade,
            bloco : req.body.bloco,
            andar : req.body.andar,
        };
        console.log(data)
        const query = `UPDATE sala SET numerosala='${data.numero}',
                     capacidade='${data.capacidade}',
                     bloco='${data.bloco}', 
                     andar='${data.andar}' WHERE id='${data.id}'`
        await pool.query(query)
        res.status(200).send({
            message:'Sala alterada com sucesso'
        })  
    } catch (error) {
        res.status(304).send({
            mensagem:error.message
        })    
    }
});

/* GET /salas/{id}/excluir. */
router.get('/:id_sala/excluir', async(req, res)=> {
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
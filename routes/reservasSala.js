var express = require('express');
var router = express.Router();
const pool =require('../bd')
/* GET reservasSala */
router.get('/', async(req, res)=> {
    try{
        const query = await pool.query("SELECT * FROM reservaSala r left join professor p on r.id_reservaSala=p.id")
        res.status(200).json(query.rows)
    }catch(error){
        res.status(400).send({
            mensagem:error.message
        })
    }
  
});

/* POST /reservasSala/cadastrar */
router.post('/cadastrar', async(req, res)=> {
    try {
        const data = req.body.data
        const qtdAlunos = req.body.qtdAlunos
        const status = req.body.status
        const periodo = req.body.periodo
    
        await pool.query(
            "INSERT INTO reservaSala (data, qtdAlunos, status,periodo) VALUES($1,$2,$3,$4) RETURNING *",[data,qtdAlunos,status,periodo]
        );
        res.status(400).send({
            messagem:"Reserva de Sala cadastrada com sucesso"
        })
    } catch (error) {
        res.status(400).send({
            mensagem:err.message
        })
    }
    
});

/* POST /reservasSala/{id}/alterar */
router.post('/:id_reservasala/alterar', async(req, res)=> {
    try { 
        const id = req.params.id_reservasala
        const data = req.body.data
        const qtdAlunos = req.body.qtdAlunos
        const status = req.body.status
        const periodo = req.body.periodo

        await pool.query("UPDATE reservaSala SET data=$1, qtdAlunos=$2, status=$3, periodo=$4 WHERE id=$5",[data,qtdAlunos,status,periodo,id]);
        res.status(200).send({
            message:'Reserva de sala alterada com sucesso'
        })  
    } catch (error) {
        res.status(304).send({
            mensagem:error.message
        })
        
    }
});

/* GET /reservasSala/{id}/excluir */
router.get('/:id_reservasala/excluir', async(req, res, next) => {
    try{
        const id = req.params.id_reservasala;
        const ok =await pool.query('delete from reservaSala where id=$1',[id]);
        res.status(200).send({
            mensagem:"Reserva excluida com sucesso"
        });
    }catch(error){
        res.status(304).send({
            mensagem:error.message
        })
    }
});

module.exports = router;
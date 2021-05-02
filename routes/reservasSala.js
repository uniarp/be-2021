var express = require('express');
var router = express.Router();
const pool =require('../bd')
/* GET reservasSala */
router.get('/', async(req, res)=> {
    try{
        const query = await pool.query("select * from reservaSala re inner join  professor p on p.id = re.id_professor inner join sala s on s.id=re.id_sala left join usuario u on u.id=re.id_usuario")
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
        const idprofessor = req.body.idprofessor
        const id_sala = req.body.id_sala
    
        await pool.query(
            "INSERT INTO reservaSala (data, qtdAlunos, status,periodo,idprofessor,id_sala) VALUES($1,$2,$3,$4,$5,$6) RETURNING *",[data,qtdAlunos,status,periodo,idprofessor,id_sala]
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
        const idprofessor = req.body.idprofessor
        const id_sala = req.body.id_sala

        await pool.query("UPDATE reservaSala SET data=$1, qtdAlunos=$2, status=$3, periodo=$4,idprofessor=$5,id_sala=$6 WHERE id=$7",[data,qtdAlunos,status,periodo,idprofessor,id_sala, id]);
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
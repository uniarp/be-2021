var express = require('express');
var router = express.Router();
const pool = require('../bd')
/* GET /professores */
router.get('/', async(req, res)=> {
 try{
     const retorno= await pool.query('select * from professor') 
     res.status(200).json(retorno.rows)
 }catch(erro){
     res.status(400).send({mensagem: erro.message}) 
 }
});

/* POST /professores/cadastrar */
router.post('/cadastrar', function(req, res) {
    const data = {
        login : req.body.loginProfessor,
        senha : req.body.senhaProfessor,
        nivel : req.body.nivelProfessor,
        nomeCompleto : req.body.nomeCompletoProfessor,
        email : req.body.emailProfessor
    };
    res.status(201).json(data);
});

/* POST /professores/{id}/alterar. */
router.post('/:id_professor/alterar', function(req, res, next) {
    const id = req.params.id_professor
    const data = {
        login : req.body.loginProfessor,
        senha : req.body.senhaProfessor,
        nivel : req.body.nivelProfessor,
        nomeCompleto : req.body.nomeCompletoProfessor,
        email : req.body.emailProfessor
    }
    res.status(200).json(data);
});

/* GET /professores/{id}/excluir. */
router.get('/:id_professor/excluir', function(req, res, next) {
    const id = req.params.id_professor;
    res.status(200).json({
        id : id
    });
});

module.exports = router;
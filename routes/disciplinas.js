var express = require('express');
var router = express.Router();

// var db= require('../bd').client;
//Cadastrar uma disciplina
router.post('/cadastrar', function(req, res){
    res.status(200).json({
        id: 1,
        nome : "Matemática Discreta",
        periodo : "Noturno",
        diaSemana : ['2', '3']
    }); 
});

//excluir uma disciplina passando o seu id
router.get('/:id/excluir', function(req,res){
    var id = req.params.id
    res.status(200).send(
        "Disciplina "+ id + " foi excluida"
    )
});

//listar todas as disciplinas
router.get('/', function(req, res){
    res.status(200).json(
    {
        1:[{
            id: 1,
        nome : "Matemática Discreta",
        periodo : "Noturno",
        diaSemana : [2, 3],
        }],
        2:[{
            id: 2,
        nome : "Projeto Integrador I",
        periodo : "Noturno",
        diaSemana : [1, 4]
        }]

        
    } )
});

//Alterar uma disciplina
router.get('/:id/alterar', function(req,res,next){
    var id = req.params.id;
    res.status(200).send( 
        "Disciplina "+ id + " foi alterada"
    )
});

module.exports = router;
var express = require('express');
var router = express.Router();

//listar os cursos
router.get('/', function(req,res){
    res.status(200).json([
        {
            id : 2,
            nome : "Licenciatura em Física"
        },
        {
            id : 5,
            nome : "Bacharelado em Ciência da Computação"
        }
    ])
}); 

//cadastrar curso
router.post('/cadastrar', function(req, res){
    res.status(200).json({
        id:1,
        nome:"Bacharelado em Sistemas de Informação"
    })
});

//excluir curso
router.get('/:id/excluir', function(req,res){
    var id=req.params.id
    res.json(
        {
           resultado: "Curso" + id +" foi excluido"
        }
    )
});

//alterar curso
router.get('/:id/alterar', function(req,res){
    var id=req.params.id
    res.json({
        resultado: "Curso" + id +" foi alterado"
    })
});

module.exports = router;
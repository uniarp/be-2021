var express = require('express');
var router = express.Router();

//exibir todas as entregas
router.get('/', function(req,res){
    res.status(200).json([
        {
            id : 2,
            data : "21/12/2020",
            qtd : 9
       },
       {
            id : 3,
            data : "22/12/2020",
            qtd : 12
       }
    ])
});

//cadastrar uma entrega
router.post('/cadastrar', function(req,res){
    res.status(200).json({
        id:1,
        data:"20/12/2020",
        qtd:5
    })
});

// excuir entrega
router.get('/:id/excluir', function(req,res){
    var id = req.params.id;
    res.status(200).send({
        resultado:"Entrega "+id+" foi excluida"
    })
})

// alterar uma entrega
router.get('/:id/alterar',function(req,res){
    var id = req.params.id;
    res.status(200).send(
        "Entrega "+id+" foi alterada"
    )
})

module.exports=router;
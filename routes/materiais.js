var express = require('express');
var router = express.Router();

//POST - Cadastrar um material
router.post('/cadastrar', function(req, res){
    res.status(200).json({
        id : 1,
        nome: "Canetão Azul",
        qtd: 10,
        descricao: "Azul com ponta média",
        marca:  "Pilot"
    });
});
// GET- Listar todos os materiais
router.get('/', function (req, res){
    res.status(200).json([
        {
            id : 5,
            nome: "Canetão Azul",
            qtd: 10,
            descricao: "Azul com ponta fina",
            marca:  "Pilot"
        },
        {
            id : 7,
            nome: "Canetão Vermelho",
            qtd: 12,
            descricao: "Vermelho com ponta média",
            marca:  "Pilot"
        }
    ])
});

//get - excluir um material especifico
router.get('/:id/excluir', function(req, res){
    var id = req.params.id;
    res.status(200).send({
        resultado: "Material "+id +" foi excluida"
    })
})

// POST- Alterar um material
router.get('/12/alterar', function(req, res){
    var  id = req.params.id;
    res.status(200).send({
        resultado:"Material "+id+"  foi alterada"
    })
});

module.exports = router;
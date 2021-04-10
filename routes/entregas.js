var express = require('express');
var router = express.Router();

/* GET /entregas */
router.get('/', function(req, res){
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
    ]);
});

/* POST /entregas/cadastrar */
router.post('/cadastrar', function(req, res){
    const data = {
        data : req.body.dataEntrega,
        qtd : req.body.qtdEntrega
    };
    res.status(201).json(data);
});

/* POST /entregas/{id}/alterar */
router.get('/:id_entrega/excluir', function(req, res){
    const id = req.params.id_entrega;
    const data = {
        data : req.body.dataEntrega,
        qtd : req.body.qtdEntrega
    }
    res.status(200).json(data);
});

/* GET /entregas/{id}/excluir */
router.get('/:id_entrega/alterar',function(req, res){
    const id = req.params.id_entrega;
    res.json({
        id : id
    });
});

module.exports=router;
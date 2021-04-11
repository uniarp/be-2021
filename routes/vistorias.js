var express = require('express');
var router = express.Router();

/* GET /vistorias */
router.get('/', function(req, res) {
    res.status(200).json([
        {
            id : "1",
            emConformidade : true,
            data : "01/03/2021",
            descricao : "Problemas resolvidos: Janelas e Carteiras",
            periodo : "Noturno"
        },
        {
            id : "2",
            emConformidade : false,
            data : "02/03/2021",
            descricao : "Problemas resolvidos: Projetor e Luzes",
            periodo : "Vespertino"
        }
    ]);
});


/* GET /vistorias/cadastrar */
router.post('/cadastrar', function(req, res) {
    const data = {
        emConformidade : req.body.emConformidadeVistoria,
        data : req.body.dataVistoria,
        descricao : req.body.descricaoVistoria,
        periodo : req.body.periodoVistoria
    };
    res.status(201).json(data);
});


/* POST /vistorias/{id}/alterar */
router.post('/:id_vistoria/alterar', function(req, res) {
    const id = req.params.id_vistoria;
    const data = {
        emConformidade : req.body.emConformidadeVistoria,
        data : req.body.dataVistoria,
        descricao : req.body.descricaoVistoria,
        periodo : req.body.periodoVistoria
    }
    res.status(200).json(data);
});


/* GET /vistorias/{id}/excluir */
router.get('/:id_vistoria/excluir', function(req, res) {
    const id = req.params.id_vistoria
    res.status(201).json({
        id : id
    });
});

module.exports = router;

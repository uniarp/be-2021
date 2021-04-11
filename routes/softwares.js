var express = require('express');
var router = express.Router();

/* GET /softwares/ */
router.get('/', function(req, res) {
    res.status(200).json([
        {
            id : 5,
            nome: "Net Beans 8.2",
            descricao: "IDE criador de programas"
        },
        {
            id : 7,
            nome: "AutoCad 2019",
            descricao: "Aplicaçao de CAD"
        }
    ]);
});

/* POST /softwares/cadastrar */
router.post('/cadastrar', function(req, res) {
    const data = {
        nome : req.body.nomeSoftware,
        descricao : req.body.descricaoSoftware
    };
    res.status(201).json(data);
})

/* POST /softwares/{id}/alterar. */
router.post('/:id_software/alterar', function(req, res) {
    const id = req.params.id_software;
    const data = {
        nome : req.body.nomeSoftware,
        descricao : req.body.descricaoSoftware
    };
    res.status(200).json(data);
});

/* GET /salasEspeciais/{id}/excluir. */
router.get('/:id_software/excluir', function(req, res) {
    const id = req.params.id_software
    res.status(200).json({
        id : id
    })
});

module.exports = router;
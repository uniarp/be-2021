var express = require('express');
var router = express.Router();

/* GET /materiais */
router.get('/', function(req, res) {
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
    ]);
});

/* POST /materiais/cadastrar */
router.post('/cadastrar', function(req, res) {
    const data = {
        nome : req.body.nomeMaterial,
        qtd : req.body.qtdMaterial,
        descricao : req.body.descricaoMaterial,
        marca :  req.body.marcaMaterial
    };
    res.status(201).json(data);
});

/* POST /materiais/{id}/alterar */
router.post('/:id_material/alterar', function(req, res) {
    const id = req.params.id_material;
    const data = {
        nome : req.body.nomeMaterial,
        qtd : req.body.qtdMaterial,
        descricao : req.body.descricaoMaterial,
        marca :  req.body.marcaMaterial
    };
    res.status(200).json(data);
});

/* GET /materiais/{id}/excluir */
router.get('/:id_material/excluir', function(req, res) {
    const id = req.params.id_material;
    res.status(200).json({
        id : id
    });
});

module.exports = router;
var express = require('express');
var router = express.Router();

/* GET /materiais/ */
router.get('/', function(req, res, next) {
    res.status(200).send({
        mensagem : 'GET Materiais',
        id : 5,
        nome: 'Canetão Azul',
        qtd: 10,
        descricao: 'Azul com ponta fina',
        marca:  'Pilot',
        })
});

module.exports = router;
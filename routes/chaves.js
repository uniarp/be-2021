var express = require('express');
var router = express.Router();

/* GET /chaves/ */
router.get('/', function(req, res) {
    res.status(200).json([
        {
            id : 7
        },
        {
            id : 13
        }
    ]);
});

/* POST /entregasChave/cadastrar */
router.post('/cadastrar', function(req, res) {
    const data = {};
    res.status(201).send(data);
})

/* POST /entregasChave/{id}/alterar. */
router.post('/:id_chave/alterar', function(req, res, next) {
    const id = req.params.id_chave;
    const data = {};
    res.status(200).json(data);
});

/* GET /entregasChave/{id}/excluir. */
router.get('/:id_chave/excluir', function(req, res, next) {
    const id = req.params.id_chave;
    res.status(200).json({
        id : id
    });
});

module.exports = router;
var express = require('express');
var router = express.Router();

/* GET /softwares/ */
router.get('/', function(req, res, next) {
    res.json({
        mensagem : 'GET Softwares',
        id : 5,
        nome: 'Net Beans 8.2',
        descricao: 'IDE criador de programas',
        },
        {
        mensagem : 'GET Software',
        id : 7,
        nome: 'AutoCad 2019',
        descricao: 'Aplicaçao de CAD',
    })
});

/* POST /softwares/cadastrar */
router.post('/cadastrar', function(req, res, next) {
    const software = req.params.software
    res.status(201).send({
        mensagem : 'POST Cadastrar Software',
        id : 1,
        nome : 'Acrobat Adobe Reader',
        descricao : 'Leitor de PDF',
    })
})

/* POST /softwares/{id}/alterar. */
router.post('/:id_software/alterar', function(req, res, next) {
    const id = req.params.id_software
    const software = req.params.software
    res.json({
        mensagem : 'GET Alterar Software',
        id : 1,
        nome: 'Acrobat Adobe Reader',
    })
});

/* GET /salasEspeciais/{id}/excluir. */
router.get('/:id_software/excluir', function(req, res, next) {
    const id = req.params.id_software
    res.json({
        mensagem : 'GET ID excluir Software',
        id : id
    })
});

module.exports = router;
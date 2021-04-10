var express = require('express');
var router = express.Router();

/* GET /cursos */
router.get('/', function(req, res, next){
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

/* POST /cursos/cadastrar */
router.post('/cadastrar', function(req, res){
    const data = {
        nome : req.body.nomeCurso
    };
    res.status(201).json(data);
});

/* POST /cursos/{id}/alterar */
router.get('/:id_curso/alterar', function(req,res){
    const id = req.params.id_curso;
    const data = {
        nome : req.body.nomeCurso
    };
    res.status(200).json(data);
});

/* GET /cursos/{id}/excluir */
router.get('/:id_curso/excluir', function(req,res){
    const id = req.params.id_curso;
    res.status(200).json({
        id : id     
    });
});

module.exports = router;
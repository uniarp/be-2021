var express = require('express');
var router = express.Router();

<<<<<<< Updated upstream
/* GET /laboratoriosInformatica/ */
router.get('/', function(req, res) {
    res.status(200).json([
        {
            id : 11,
            numero : 2,
            numeroSala : 908,
            localizacao : ["D", "2º andar"],
            capacidade : 25,
            qtdComputadores : 20,
            numeroLaboratorioInformatica : 2
        },
        {
            id : 14,
            numero : 4,
            numeroSala : 909,
            localizacao : ["D", "3º andar"],
            capacidade : 25,
            qtdComputadores : 20,
        }
    ]);
=======
<<<<<<< Updated upstream
/* GET /laboratoriosinformatica/ */
router.get('/', function(req, res, next) {
    res.json({
        mensagem : 'GET LaboratoriosInformatica',
        id : 11,
        numeroSala : 908,
        localizacao : ['D', '2º andar'],
        capacidade : 25,
        qtdComputadores : 20,
        numeroLaboratorioInformatica : 2
    })
>>>>>>> Stashed changes
});

/* POST /laboratoriosinformatica/cadastrar */
router.post('/cadastrar', function(req, res) {
    const data = {
        numeroSala : req.body.numeroSalaLaboratorioInformatica,
        localizacao : req.body.localizacaoLaboratorioInformatica,
        capacidade : req.body.capacidadeLaboratorioInformatica,
        qtdComputadores : req.body.qtdComputadoresLaboratorioInformatica,
        numero: req.body.numeroLaboratorioInformatica
    };
    res.status(201).json(data);
});

<<<<<<< Updated upstream
=======
/* POST /laboratoriosinformatica/cadastrar */
router.post('/cadastrar', function(req, res, next) {
    res.status(201).send({
        mensagem : 'POST Cadastrar LaboratoriosInformatica',
        id : 11,
        numeroSala : 908,
        localizacao : ['D', '2º andar'],
        capacidade : 25,
        qtdComputadores : 20,
        numeroLaboratorioInformatica : 2
    })
})
=======
/* GET /laboratoriosInformatica/ */
router.get('/', function(req, res) {
    res.status(200).json([
        {
            id : 11,
            numero : 2,
            numeroSala : 908,
            localizacao : {
                bloco : "D",
                andar : "2º andar"
            },
            capacidade : 25,
            qtdComputadores : 20,
        },
        {
            id : 14,
            numero : 4,
            numeroSala : 909,
            localizacao : {
                bloco : "D",
                andar : "3º andar"
            },
            capacidade : 25,
            qtdComputadores : 20,
        }
    ]);
});

/* POST /laboratoriosinformatica/cadastrar */
router.post('/cadastrar', function(req, res) {
    const data = {
        numero : req.body.numeroLaboratorioInformatica,
        numeroSala : req.body.numeroSalaLaboratorioInformatica,
        localizacao : {
            bloco : req.body.localizacaoLaboratorioInformatica.blocoLocalizacaoLaboratorioInformatica,
            andar : req.body.localizacaoLaboratorioInformatica.andarLocalizacaoLaboratorioInformatica
        },
        capacidade : req.body.capacidadeLaboratorioInformatica,
        qtdComputadores : req.body.qtdComputadoresLaboratorioInformatica
    };
    res.status(201).json(data);
});

>>>>>>> Stashed changes
/* POST /laboratoriosinformatica/{id}/alterar. */
router.post('/:id_laboratoriosinformatica/alterar', function(req, res) {
    const id = req.params.id_laboratorioinformatica
    const data = {
<<<<<<< Updated upstream
        numeroSala : req.body.numeroSalaLaboratorioInformatica,
        localizacao : req.body.localizacaoLaboratorioInformatica,
        capacidade : req.body.capacidadeLaboratorioInformatica,
        qtdComputadores : req.body.qtdComputadoresLaboratorioInformatica,
        numero: req.body.numeroLaboratorioInformatica
    };
    res.status(200).json(data);
});
=======
        numero : req.body.numeroLaboratorioInformatica,
        numeroSala : req.body.numeroSalaLaboratorioInformatica,
        localizacao : {
            bloco : req.body.localizacaoLaboratorioInformatica.blocoLocalizacaoLaboratorioInformatica,
            andar : req.body.localizacaoLaboratorioInformatica.andarLocalizacaoLaboratorioInformatica
        },
        capacidade : req.body.capacidadeLaboratorioInformatica,
        qtdComputadores : req.body.qtdComputadoresLaboratorioInformatica
    };
    res.status(200).json(data);
});
>>>>>>> Stashed changes
>>>>>>> Stashed changes

/* GET /laboratoriosinformatica/{id}/excluir. */
router.get('/:id_laboratorioinformatica/excluir', function(req, res) {
    const id = req.params.id_laboratorioinformatica;
    res.status(200).json({
        id : id
    });
});

module.exports = router;
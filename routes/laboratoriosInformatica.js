var express = require('express');
var router = express.Router();

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

/* POST /laboratoriosinformatica/{id}/alterar. */
router.post('/:id_laboratoriosinformatica/alterar', function(req, res) {
    const id = req.params.id_laboratorioinformatica
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
    res.status(200).json(data);
});

/* GET /laboratoriosinformatica/{id}/excluir. */
router.get('/:id_laboratoriosinformatica/excluir', function(req, res, next) {
    const id = req.params.id_laboratoriosinformatica
    res.json({
        mensagem : 'GET Excluir Equipamento',
        id : id
    })
});

module.exports = router;
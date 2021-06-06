var express = require('express');
var router = express.Router();
const pool = require('../bd')

/* GET /equipamentos/ */
router.get('/', async(req, res)=> {
    try {
        const query = await pool.query(`SELECT e.*, te.nome, s.numerosala 
            FROM equipamento e
            INNER JOIN tipoequipamento te
            ON e.id_tipoequipamento=te.id INNER JOIN sala s
            ON e.id_sala=s.id`);
        res.status(200).json(query.rows);
    }catch (error) {
        res.status(400).send({
            mensagem : error.message
        })
    }
});

/* POST /equipamentos/cadastrar */
router.post('/cadastrar', async(req, res)=> {
    try {
        const data = {
            dataAquisicao : req.body.dataAquisicao,
            marca : req.body.marca,
            modelo : req.body.modelo,
            status : req.body.status,
            id_tipoequipamento : req.body.tipoEquipamento,
            id_sala : req.body.sala
        };
        const query = `INSERT INTO equipamento (dataaquisicao, marca, modelo, id_tipoequipamento, id_sala, status)
                        VALUES ('${data.dataAquisicao}','${data.marca}','${data.modelo}',${data.id_tipoequipamento},${data.id_sala},'${data.status}')`
        await pool.query(query)
        console.log(data)
        res.status(200).send({
            mensagem : "Cadastro bem sucedido!"
        })
    } catch (error) {
        res.status(400).send({
            mensagem : error.message
        })
    }
});

/* POST /equipamentos/{id}/alterar. */
router.post('/:id/alterar', async(req, res)=> {
    try {
        const data = {
            id : req.params.id,
            dataAquisicao : req.body.dataAquisicao,
            marca : req.body.marca,
            modelo : req.body.modelo,
            id_tipoequipamento : req.body.id_tipoequipamento,
            id_sala : req.body.id_sala
    };
    const query = `UPDATE equipamento SET dataaquisicao='${data.dataAquisicao}',
                        marca='${data.marca}',modelo='${data.modelo}',
                        id_tipoequipamento='${data.id_tipoequipamento}',id_sala='${data.id_sala}' 
                        WHERE id='${data.id}'`;
        await pool.query(query)
        res.status(200).send({
            message:'Disciplina Alterada!'
        })
    }catch (error) {
        res.status(304).send({
            mensagem : error.message
        })
    }
});

/* GET /equipamentos/{id}/excluir. */
router.get('/:id/excluir', async(req, res)=> {
    try {
        const id =req.params.id;
        const query =`DELETE FROM equipamento WHERE id='${id}'`;
        await pool.query(query)
        res.status(200).send({
            mensagem:"Equipamento Excluído!"
        });
    }catch (error) {
        res.status(400).send({
            mensagem : error.message
        })
    }
});

module.exports = router;
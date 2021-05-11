var express = require('express');
const pool = require('../bd');
var router = express.Router();

/* GET /entregas */
router.get('/', async(req, res)=>{
   try{
       const query = await pool.query(`SELECT ent.*,pro.nomecompleto as nome_professor,
                        mat.nome as nome_material, usr.login as login
                            FROM entrega ent INNER JOIN professor pro
                            ON ent.id_professor=pro.id INNER JOIN material mat 
                            ON ent.id_material=mat.id INNER JOIN usuario usr
                            ON ent.id_usuario=usr.id`) 
        res.status(200).json(query.rows)
   }catch (error) {
       res.status(400).send({
           mensagem: error.message
       })
   }
});

/* POST /entregas/cadastrar */
router.post('/cadastrar', async(req, res)=>{
    try {
        console.log(req.body);
        const data = {
            data : req.body.data,
            qtd : req.body.qtd,
            id_professor : req.body.professor,
            id_material : req.body.material,
            id_usuario : req.body.usuario.id
        };
        const query = `INSERT INTO entrega (data, qtd, id_professor, id_material, id_usuario)
                        VALUES ('${data.data}','${data.qtd}','${data.id_professor}',
                        '${data.id_material}','${data.id_usuario}')`
        console.log(query);
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

/* POST /entregas/{id}/excluir */
router.get('/:id/excluir', async(req, res)=>{
    try {
        const id =req.params.id;
        const query =`DELETE FROM entrega WHERE id='${id}'`;
        await pool.query(query)
        res.status(200).send({
            mensagem:"Entrega excluída com sucesso"
        });
    } catch (error) {
        res.status(304).send({
            mensagem : error.message
        })
    }
});

/* POST /entregas/{id}/alterar */
router.post('/:id/alterar',async(req, res)=>{
    try {
        const data = { 
                id : req.params.id,
                data: req.body.data,
                qtd: req.body.qtd,
                id_professor : req.body.professor,
                id_material : req.body.material,
                id_usuario : req.body.id_usuario
        };
        const query = `UPDATE entrega SET data='${data.data}',
                        qtd='${data.qtd}',id_professor='${data.id_professor}',
                        id_material='${data.id_material}',id_usuario='${data.id_usuario}' WHERE id='${data.id}'`;
        await pool.query(query)
        res.status(200).send({
            message:'Entrega Alterada!'
        })
    } catch (error) {
        res.status(304).send({
            mensagem : error.message
        })
    }
});

module.exports=router;
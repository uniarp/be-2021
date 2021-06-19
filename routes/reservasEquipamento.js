var express = require('express');
var router = express.Router();
const pool = require('../bd')
/* GET /reservasEquipamento/ */
router.get('/', async (req, res) => {
    try {
        const query = await pool.query(`select re.* ,e.marca as marca_equipamento,
        e.modelo as modelo_equipamento, p.nomecompleto as nome_professor, p.email as email_professor,
        te.nome as tipo_equipamento, u.nomecompleto as nome_usuario,u.email as email_usuario,
        u.nivel as nivel_usuario from reservaequipamento re inner join equipamento e
        on re.id_equipamento = e.id inner join professor p on re.id_professor=p.id
        inner join tipoequipamento te on e.id_tipoequipamento =te.id left join usuario u on u.id=re.id_usuario`)
        res.status(200).json(query.rows)
    } catch (err) {
        res.status(400).send({
            mensagem: err.message
        })
    }
});

// lista de reservas de equipamento solicitadas
router.get('/solicitada', async (req, res) => {
    try {
        var query = await pool.query(`select re.* ,e.marca as marca_equipamento,
        e.modelo as modelo_equipamento, p.nomecompleto as nome_professor, p.email as email_professor,
        te.nome as tipo_equipamento, u.nomecompleto as nome_usuario,u.email as email_usuario,
        u.nivel as nivel_usuario from reservaequipamento re inner join equipamento e
        on re.id_equipamento = e.id inner join professor p on re.id_professor=p.id
        inner join tipoequipamento te on e.id_tipoequipamento =te.id left join usuario u on u.id=re.id_usuario where re.status='solicitado' order by  re.datacriacao asc`)
        res.status(200).json(query.rows)
    } catch (err) {
        res.status(400).send({
            mensagem: err.message
        })
    }
})

// listar reservas filtrando pela dataEntrega
router.get('/peladataentrega', async (req, res) => {
    const date = {
        data_min: req.body.data_min,
        data_max: req.body.data_max
    }
    try {
        if (date.data_max == null && date.data_min != null) {
            const query = await pool.query(`
                select re.* ,e.marca as marca_equipamento,
                    e.modelo as modelo_equipamento, p.nomecompleto as nome_professor, p.email as email_professor,
                    te.nome as tipo_equipamento, u.nomecompleto as nome_usuario,u.email as email_usuario,
                    u.nivel as nivel_usuario 
                from reservaequipamento re inner join equipamento e
                    on re.id_equipamento = e.id inner join professor p on re.id_professor=p.id
                    inner join tipoequipamento te on e.id_tipoequipamento =te.id left join usuario u on u.id=re.id_usuario
                where dataentrega>=$1 order by dataentrega asc`, [date.data_min]
            )
            res.status(200).json(query.rows)
        } else if (date.data_max != null & date.data_min != null & date.data_min < date.data_max) {
            const query = await pool.query(`
                select re.* ,e.marca as marca_equipamento,
                    e.modelo as modelo_equipamento, p.nomecompleto as nome_professor, p.email as email_professor,
                    te.nome as tipo_equipamento, u.nomecompleto as nome_usuario,u.email as email_usuario,
                    u.nivel as nivel_usuario 
                from reservaequipamento re inner join equipamento e
                    on re.id_equipamento = e.id inner join professor p on re.id_professor=p.id
                    inner join tipoequipamento te on e.id_tipoequipamento =te.id left join usuario u on u.id=re.id_usuario
                where dataentrega between $1 and $2 order by dataentrega asc`, [date.data_min, date.data_max]
            )
            res.status(200).json(query.rows)
        }
        else {
            res.status(400).send({ mensagem: "Informe uma data valida" })
        }
    } catch (err) {
        res.status(400).send({
            mensagem: err.message
        })
    }
});

// listar reservas filtrando pela dataDevolucao
router.get('/peladatadevolucao', async (req, res) => {
    const date = {
        data_min: req.body.data_min,
        data_max: req.body.data_max
    }
    try {
        if (date.data_max == null && date.data_min != null) {
            const query = await pool.query(`
                select re.* ,e.marca as marca_equipamento,
                    e.modelo as modelo_equipamento, p.nomecompleto as nome_professor, p.email as email_professor,
                    te.nome as tipo_equipamento, u.nomecompleto as nome_usuario,u.email as email_usuario,
                    u.nivel as nivel_usuario 
                from reservaequipamento re inner join equipamento e
                    on re.id_equipamento = e.id inner join professor p on re.id_professor=p.id
                    inner join tipoequipamento te on e.id_tipoequipamento =te.id left join usuario u on u.id=re.id_usuario
                where datadevolucao>=$1 order by datadevolucao asc`, [date.data_min]
            )
            res.status(200).json(query.rows)
        } else if (date.data_max != null & date.data_min != null & date.data_min < date.data_max) {
            const query = await pool.query(`
                select re.* ,e.marca as marca_equipamento,
                    e.modelo as modelo_equipamento, p.nomecompleto as nome_professor, p.email as email_professor,
                    te.nome as tipo_equipamento, u.nomecompleto as nome_usuario,u.email as email_usuario,
                    u.nivel as nivel_usuario 
                from reservaequipamento re inner join equipamento e
                    on re.id_equipamento = e.id inner join professor p on re.id_professor=p.id
                    inner join tipoequipamento te on e.id_tipoequipamento =te.id left join usuario u on u.id=re.id_usuario
                where datadevolucao between $1 and $2 order by datadevolucao asc`, [date.data_min, date.data_max]
            )
            res.status(200).json(query.rows)
        }
        else {
            res.status(400).send({ mensagem: "Informe uma data valida" })
        }
    } catch (err) {
        res.status(400).send({
            mensagem: err.message
        })
    }
});


// listar reservas filtrando pela data do cadastro da reserva
router.get('/peladatacadastro', async (req, res) => {
    const date = {
        data_min: req.body.data_min,
        data_max: req.body.data_max
    }

    try {
        if (date.data_max == null && date.data_min != null) {
            const query = await pool.query(`
                select re.* ,e.marca as marca_equipamento,
                    e.modelo as modelo_equipamento, p.nomecompleto as nome_professor, p.email as email_professor,
                    te.nome as tipo_equipamento, u.nomecompleto as nome_usuario,u.email as email_usuario,
                    u.nivel as nivel_usuario 
                from reservaequipamento re inner join equipamento e
                    on re.id_equipamento = e.id inner join professor p on re.id_professor=p.id
                    inner join tipoequipamento te on e.id_tipoequipamento =te.id left join usuario u on u.id=re.id_usuario
                where datacriacao>=$1 order by datacriacao asc`, [date.data_min]
            )
            res.status(200).json(query.rows)
        } else if (date.data_max != null & date.data_min != null & date.data_min < date.data_max) {
            const query = await pool.query(`
                select re.* ,e.marca as marca_equipamento,
                    e.modelo as modelo_equipamento, p.nomecompleto as nome_professor, p.email as email_professor,
                    te.nome as tipo_equipamento, u.nomecompleto as nome_usuario,u.email as email_usuario,
                    u.nivel as nivel_usuario 
                from reservaequipamento re inner join equipamento e
                    on re.id_equipamento = e.id inner join professor p on re.id_professor=p.id
                    inner join tipoequipamento te on e.id_tipoequipamento =te.id left join usuario u on u.id=re.id_usuario
                where datacriacao between $1 and $2 order by datacriacao asc`, [date.data_min, date.data_max]
            )
            res.status(200).json(query.rows)
        } else {
            res.status(400).send({ mensagem: "Informe uma data valida" })
        }
    } catch (err) {
        res.status(400).send({
            mensagem: err.message
        })
    }
});

/* POST /reservasEquipamento/cadastrar */
router.post('/cadastrar', async (req, res) => {
    const data = {
        dataEntrega: req.body.dataEntrega,
        dataDevolucao: req.body.dataDevolucao,
        observacao: req.body.observacao,
        status: req.body.status,
        periodo: req.body.periodo,
        id_professor: req.body.professor,
        id_equipamento: req.body.equipamento,
    }
    console.log('me', data)
    try {
        await pool.query("INSERT INTO reservaequipamento (dataentrega,datadevolucao,observacao,status,periodo,id_professor,id_equipamento) VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING *", [data.dataEntrega, data.dataDevolucao, data.observacao, data.status, data.periodo, data.id_professor, data.id_equipamento]);
        res.status(200).send({
            mensagem: "Reserva de equipamento cadastrada com sucesso"
        })
    } catch (err) {
        res.status(400).send({
            mensagem: err.message
        })
    }
});

/* POST /reservasEquipamento/{id}/alterar */
router.post('/:id/alterar', async (req, res) => {
    const id = req.params.id
    try {
        const data = {
            dataEntrega: req.body.dataEntrega,
            dataDevolucao: req.body.dataDevolucao,
            observacao: req.body.observacao,
            status: req.body.status,
            periodo: req.body.periodo,
            id_professor: req.body.professor,
            id_equipamento: req.body.equipamento,
        }
        const idusuario = req.body.idusuario;
        await pool.query(`update reservaequipamento set 
        dataentrega=$1,datadevolucao=$2,observacao=$3,status=$4,periodo=$5
        ,id_professor=$6,id_equipamento=$7,id_usuario=$8 where id=$9`, [
            data.dataEntrega, data.dataDevolucao, data.observacao, data.status,
            data.periodo, data.id_professor, data.id_equipamento, idusuario, id
        ])
        res.status(200).send({
            message: 'reserva de equipamento alterada com sucesso'
        })
    } catch (err) {
        res.status(304).send({
            mensagem: err.message
        })
    }
});

/* GET /reservasEquipamento/{id}/excluir */
router.get('/:id/excluir', async (req, res) => {
    try {
        const id = req.params.id
        await pool.query(`delete from reservaequipamento where id='${id}'`);
        res.status(200).send({
            mensagem: "Reserva de equipamento excluida com sucesso"
        });
    } catch (error) {
        res.status(304).send({
            mensagem: error.message
        })
    }
});

module.exports = router;
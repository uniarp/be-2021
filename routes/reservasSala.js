var express = require('express');
var router = express.Router();
const pool = require('../bd')
/* Listar todas as reservas */
router.get('/', async (req, res) => {
    try {
        const query = await pool.query(`
            SELECT rs.*, ec.status as status_entregachave, s.numerosala, u.nomecompleto as nome_usuario, 
                p.nomecompleto as nome_professor 
            FROM reservasala rs
                INNER JOIN sala s ON rs.id_sala = s.id
                INNER JOIN professor p ON rs.id_professor = p.id
                LEFT JOIN entregachave ec on ec.id_reservasala=rs.id
                LEFT JOIN usuario u ON rs.id_usuario = u.id
        `)
        res.status(200).json(query.rows)
    } catch (error) {
        res.status(400).send({
            mensagem: error.message
        })
    }

});
// listar reservas filtrando pela data da reserva
router.get('/peladatareserva', async (req, res) => {
    const date = {
        data_min: req.body.data_min,
        data_max: req.body.data_max
    }
    try {
        if (date.data_max == null && date.data_min != null) {
            const query = await pool.query(`
                SELECT rs.*, ec.status as status_entregachave, s.numerosala, u.nomecompleto as nome_usuario, 
                    p.nomecompleto as nome_professor 
                FROM reservasala rs
                    INNER JOIN sala s ON rs.id_sala = s.id
                    INNER JOIN professor p ON rs.id_professor = p.id
                    LEFT JOIN entregachave ec on ec.id_reservasala=rs.id
                    LEFT JOIN usuario u ON rs.id_usuario = u.id 
                where data>=$1 order by data asc
            `, [date.data_min])
            res.status(200).json(query.rows)
        } else if (date.data_max != null & date.data_min != null & date.data_min < date.data_max) {
            const query = await pool.query(`
                SELECT rs.*, ec.status as status_entregachave, s.numerosala, u.nomecompleto as nome_usuario, 
                    p.nomecompleto as nome_professor 
                FROM reservasala rs
                    INNER JOIN sala s ON rs.id_sala = s.id
                    INNER JOIN professor p ON rs.id_professor = p.id
                    LEFT JOIN entregachave ec on ec.id_reservasala=rs.id
                    LEFT JOIN usuario u ON rs.id_usuario = u.id 
                where data between $1 and $2 order by data asc
            `, [date.data_min, date.data_max])
            res.status(200).json(query.rows)
        } else {
            res.status(400).send({ mensagem: "Informe uma data valida" })
        }
    } catch (err) {
        res.status(400).send({
            mensagem: err.message
        })
    }
})

// listar reservas filtrando pela data do cadastro da reserva
router.get('/peladatacadastro', async (req, res) => {
    const date = {
        data_min: req.body.data_min,
        data_max: req.body.data_max
    }
    try {
        if (date.data_max == null && date.data_min != null) {
            const query = await pool.query(`
                SELECT rs.*, ec.status as status_entregachave, s.numerosala, u.nomecompleto as nome_usuario, 
                    p.nomecompleto as nome_professor 
                FROM reservasala rs
                    INNER JOIN sala s ON rs.id_sala = s.id
                    INNER JOIN professor p ON rs.id_professor = p.id
                    LEFT JOIN entregachave ec on ec.id_reservasala=rs.id
                    LEFT JOIN usuario u ON rs.id_usuario = u.id 
                where datacriacao>=$1 order by datacriacao asc
            `, [date.data_min])
            res.status(200).json(query.rows)
        } else if (date.data_max != null & date.data_min != null & date.data_min < date.data_max) {
            const query = await pool.query(`
                SELECT rs.*, ec.status as status_entregachave, s.numerosala, u.nomecompleto as nome_usuario, p.nomecompleto as nome_professor 
                FROM reservasala rs
                    INNER JOIN sala s ON rs.id_sala = s.id
                    INNER JOIN professor p ON rs.id_professor = p.id
                    LEFT JOIN entregachave ec on ec.id_reservasala=rs.id
                    LEFT JOIN usuario u ON rs.id_usuario = u.id 
                where datacriacao between $1 and $2 order by datacriacao asc
            `, [date.data_min, date.data_max])
            res.status(200).json(query.rows)
        } else {
            res.status(400).send({ mensagem: "Informe uma data valida" })
        }
    } catch (err) {
        res.status(400).send({
            mensagem: err.message
        })
    }
})

//Lista-espera-sala
router.get('/solicitada', async (req, res) => {
    try {
        var query = await pool.query(`select re.*,p.nomecompleto as nome_professor,p.email as 
        email_professor,s.numerosala,s.bloco,s.andar,u.nomecompleto as nome_usuario,u.email as 
        email_usuario,u.nivel as nivel_usuario from reservaSala re inner join  
        professor p on p.id = re.id_professor inner join sala s on s.id=re.id_sala left join usuario 
        u on u.id=re.id_usuario where re.status='solicitado' order by  re.datacriacao asc`)
        res.status(200).json(query.rows)
    } catch (error) {
        res.status(400).send({
            mensagem: error.message
        })
    }

});

/* POST /reservasSala/cadastrar */
router.post('/cadastrar', async (req, res) => {
    try {
        const data = req.body.data
        const qtdAlunos = req.body.qtdAlunos
        const status = req.body.status
        const periodo = req.body.periodo
        const idprofessor = req.body.professor
        const id_sala = req.body.sala
        await pool.query(
            "INSERT INTO reservasala (data, qtdalunos, status,periodo,id_professor,id_sala) VALUES($1,$2,$3,$4,$5,$6) RETURNING *", [data, qtdAlunos, status, periodo, idprofessor, id_sala]
        );
        res.status(200).send({
            messagem: "Reserva de Sala cadastrada com sucesso"
        })
    } catch (error) {
        res.status(400).send({
            mensagem: err.message
        })
    }

});

/* POST /reservasSala/{id}/alterar */
router.post('/:id_reservasala/alterar', async (req, res) => {
    try {
        const id = req.params.id_reservasala
        const data = req.body.data
        const qtdAlunos = req.body.qtdAlunos
        const status = req.body.status
        const periodo = req.body.periodo
        const idprofessor = req.body.professor
        const id_sala = req.body.sala

        await pool.query("UPDATE reservasala SET data=$1, qtdalunos=$2, status=$3, periodo=$4,id_professor=$5,id_sala=$6 WHERE id=$7", [data, qtdAlunos, status, periodo, idprofessor, id_sala, id]);
        res.status(200).send({
            message: 'Reserva de sala alterada com sucesso'
        })
    } catch (error) {
        res.status(304).send({
            mensagem: error.message
        })

    }
});

/* DELETE /reservasSala/{id}/excluir */
router.delete('/:id/excluir/', async (req, res) => {
    try {
        const id = req.params.id
        await pool.query('delete from entregachave where id_reservasala = $1', [id]);
        await pool.query('delete from reservasala where id = $1', [id])
        res.status(200).send({
            mensagem: "Reserva excluida com sucesso"
        });
    } catch (error) {
        res.status(304).send({
            mensagem: error.message
        })
    }
});

//encontrar sala informando o professor, pela reserva do professor
router.get('/:id/buscar', async (req, res) => {
    const id_professor = req.params.id
    try {
        var query = await pool.query(`
            select to_char(re.data::DATE,'dd-mm-yyyy') as data,re.id,re.periodo, pr.nomecompleto as 
            nome_professor,sa.numerosala,sa.bloco,sa.andar from reservasala re inner join professor pr on re.id_professor=pr.id 
            inner join sala sa on re.id_sala=sa.id where re.id_professor=$1 and data>=NOW()::date order by data asc limit 6`, [id_professor]
        );
        res.status(200).json(query.rows)
    } catch (error) {
        res.status(400).send({
            mensagem: error.message
        })
    }
})

module.exports = router;
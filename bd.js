async function connect() {
    if (global.connection)
        return global.connection.connect();
 
    const { Pool } = require('pg');
    const pool = new Pool({
        connectionString: 
        'postgres://pcyjxxfcwsmwzj:f2ebf0256cdbefe26ac4de79134709e2723ab51962605b6e46ef9b4a07d26adb@ec2-54-146-73-98.compute-1.amazonaws.com:5432/dfpeecj4elj579',
        ssl : {
            rejectUnauthorized: false
        }
    });
 
    //apenas testando a conexão
    const client = await pool.connect();
    console.log("Conectou no PostgreSQL!");
 
    const res = await client.query('SELECT NOW()');
    console.log(res.rows[0]);
    client.release();
    
    //guardando para usar sempre o mesmo
    global.connection = pool;
    return pool.connect();
}

async function select(query) {
    const client = await connect();
    const res = await client.query(query);
    resultado = res.rows;
    console.table(resultado) // exibe resultado console
    return resultado;
}
select('SELECT * FROM sala')
select('SELECT * FROM questao')

module.exports = { select }

module.exports = {connect};
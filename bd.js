// JavaScript source code
async function conectar() {
    if (global.connection)
        return global.connection.conectar();
 
    const { Pool } = require('pg');
    const pool = new Pool({
        conexaoStr: 'postgres://pcyjxxfcwsmwzj:f2ebf0256cdbefe26ac4de79134709e2723ab51962605b6e46ef9b4a07d26adb@ec2-54-146-73-98.compute-1.amazonaws.com:5432/dfpeecj4elj579'
    });
 
    //apenas testando a conexão
    const client = await pool.conectar();
    console.log("Criou pool de conexões no PostgreSQL!");
 
    const res = await client.query('SELECT NOW()');
    console.log(res.rows[0]);
    client.release();
 
    //guardando para usar sempre o mesmo pool
    global.connection = pool;
    return pool.conectar();


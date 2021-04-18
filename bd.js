const Pool = require('pg').Pool;
const pool = new Pool({
    connectionString: 
    'postgres://pcyjxxfcwsmwzj:f2ebf0256cdbefe26ac4de79134709e2723ab51962605b6e46ef9b4a07d26adb@ec2-54-146-73-98.compute-1.amazonaws.com:5432/dfpeecj4elj579',
    ssl : {
        rejectUnauthorized: false //a verificar :true
    }
});
module.exports=pool;
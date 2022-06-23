const mysql = require('mysql2');

//Database connection
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'cv_crud',
    port:'3306'
});

//Check database connection
db.connect(err=>{
    if (err){
        console.log('Ha ocurrido un error'+ err);
    }else{
        console.log('La base de datos se ha conectado')
    }
});

module.exports = db;
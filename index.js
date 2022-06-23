const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

//const mysql = require('mysql2');
require('./config/conexion');

const app = express();

app.use('/api',require('./routes/routefreetime'))

app.use(cors());
app.use(bodyparser.json());

app.listen(3000,()=>{
    console.log('server running ...')
});
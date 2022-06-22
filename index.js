const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();

app.use(cors());
app.use(bodyparser.json());

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
    if (err) {console.log(err,'dberr');}
    console.log('database conected ...')
})

//GET all data
app.get('/pasatiempos',(req,res)=>{
    
    let qr = `SELECT * FROM pasatiempos_tb`;

    db.query(qr,(err,result)=>{
        if(err){
            console.log(err,'errs');
        }
        if(result.length>0){
            res.send({
                message:'all pasatiempos data',
                data:result
            });
        }
    });
});

//GET a single data
app.get('/pasatiempos/:id',(req,res)=>{

    let gID = req.params.id;
    let qr = `SELECT * FROM pasatiempos_tb WHERE id = ${gID}`;

    db.query(qr,(err,result)=>{
        if(err){
            console.log(err);
        }
        if(result.length>0){
            res.send({
                message:'get a single data',
                data:result
            });
        }else{
            res.send({
                message:'data not found'
            });
        }
    });
});

//POST create data
app.post('/pasatiempos',(req,res)=>{

    console.log(req.body,'createdata');

    let Url = req.body.url;
    let Actividad = req.body.actividad;
    let Descripcion = req.body.descripcion;

    let qr = `insert into pasatiempos_tb(url,actividad,descripcion) values('${Url}','${Actividad}','${Descripcion}')`;

    db.query(qr,(err,result)=>{
        if(err){
            console.log(err);
        }console.log(result,'result')
        res.send({
            message:'data inserted'
        });
    });
});

//PUT uptade a single data
app.put('/pasatiempos/:id',(req,res)=>{
    console.log(req.body,'updatedata');

    let gID = req.params.id;
    let Url = req.body.url;
    let Actividad = req.body.actividad;
    let Descripcion = req.body.descripcion; 

    let qr = `update pasatiempos_tb set url = '${Url}', actividad = '${Actividad}', descripcion = '${Descripcion}' where id = '${gID}'`;

    db.query(qr,(err,result)=>{
        if(err){
            console.log(err);
        }res.send({
            message:'data updated'
        });
    });
});

//DELETE a single data
app.delete('/pasatiempos/:id',(req,res)=>{

    let qID = req.params.id;

    let qr = `delete from pasatiempos_tb where id = '${qID}'`;

    db.query(qr,(err,result)=>{
        if(err){
            console.log(err);
        }res.send({
            message:'data deleted'
        })
    })
})






app.listen(3000,()=>{
    console.log('server running ...')
});
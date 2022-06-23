const pasatiemposrouter = require('express').Router()
const db = require('../config/conexion')

//GET all data
pasatiemposrouter.get('/pasatiempos',(req,res)=>{
    
    let qr = `SELECT * FROM pasatiempos_tb`;

    db.query(qr,(err,result)=>{
        if(err){
            console.log(err,'errs');
        }
        if(result.length>0){
            res.send({
                data:result
            });
        }
    });
});

//GET a single data
pasatiemposrouter.get('/pasatiempos/:id',(req,res)=>{

    let gID = req.params.id;
    let qr = `SELECT * FROM pasatiempos_tb WHERE id = ${gID}`;

    db.query(qr,(err,result)=>{
        if(err){
            console.log(err);
        }
        if(result.length>0){
            res.send({
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
pasatiemposrouter.post('/pasatiempos',(req,res)=>{

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
pasatiemposrouter.put('/pasatiempos/:id',(req,res)=>{
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
pasatiemposrouter.delete('/pasatiempos/:id',(req,res)=>{

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

module.exports = pasatiemposrouter;
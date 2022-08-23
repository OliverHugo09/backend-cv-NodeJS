import { request, response } from 'express';
import { FreetimeQueries } from '../queries/freetime.queries.js';
import { Payload } from '../helpers/payload.js';

class FreetimeController {

    static payload = new Payload();

    async create(req,res) {
        const body = req.body;
        const condition = body.condition;
        const query = await FreetimeQueries.store(body,condition);
        if(query.ok){
            return res.status(200).json({ok: true, data: query.data});
        }else{
            return res.status(403).json({ok: false, message: 'Error on process request'});
        }
    }

    async find(req, res) {
        const body = req.body;
        const condition = body.condition;
        const query = await FreetimeQueries.find(condition);
        if(query.ok) {
            return res.status(200).json(query.data);
        } else {
            return res.status(403).json({ok: false, message: 'Error on process request'});
        }
    }

    async findByPk(req,res) {
        const body = req.body;
        const condition = body.condition;
        const {id} = req.params;
        const query = await FreetimeQueries.findByPk(id,condition);
        if(query.ok){
            return res.status(200).json(query.data);
        }else{
            return res.status(403).json({ok: false, message: 'No found'});
        }
    }

    async update(req,res) {
        const body = req.body;
        const condition = body.condition;
        const {urlimg,subtitle,descripcion} = req.body;
        const {id} = req.params;
        const query = await FreetimeQueries.update(id,urlimg,subtitle,descripcion,condition);
        const queryres = await FreetimeQueries.findByPk(id,condition);
        if(query.ok){
            return res.status(200).json({queryres});
        }else{
            return res.status(403).json({ok: false, message: 'No found'});
        }
    }

    async delete(req,res) {
        const body = req.body;
        const condition = body.condition;
        const {id} = req.params;
        const query = await FreetimeQueries.delete(id,condition);
        if(query.ok){
            return res.status(200).json({ok: true, data: query.data});
        }else{
            return res.status(403).json({ok: false, message: 'No found'});
        }
    }

}
export const freetimeController = new FreetimeController();
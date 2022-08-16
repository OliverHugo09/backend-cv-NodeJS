import { request, response } from 'express';
import { ContactQueries } from '../queries/contact.queries.js';
import { Payload } from '../helpers/payload.js';

class ContactController {

    static payload = new Payload();

    async create(req,res) {
        const body = req.body;
        const condition = body.condition;
        const query = await ContactQueries.store(body,condition);
        if(query.ok){
            return res.status(200).json({ok: true, data: query.data});
        }else{
            return res.status(403).json({ok: false, message: 'Error on process request'});
        }
    }

    async find(req, res) {
        const body = req.body;
        const condition = body.condition;
        const query = await ContactQueries.find(condition);
        if(query.ok) {
            return res.status(200).json({ok: true, data: query.data});
        } else {
            return res.status(403).json({ok: false, message: 'Error on process request'});
        }
    }

    async findByPk(req,res) {
        const body = req.body;
        const condition = body.condition;
        const {id} = req.params;
        const query = await ContactQueries.findByPk(id,condition);
        if(query.ok){
            return res.status(200).json({ok: true, data: query.data});
        }else{
            return res.status(403).json({ok: false, message: 'No found'});
        }
    }

    async update(req,res) {
        const body = req.body;
        const condition = body.condition;
        const {title,urlmap,descripcion} = req.body;
        const {id} = req.params;
        const query = await ContactQueries.update(id,title,urlmap,descripcion,condition);
        const queryres = await ContactQueries.findByPk(id,condition);
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
        const query = await ContactQueries.delete(id,condition);
        if(query.ok){
            return res.status(200).json({ok: true, data: query.data});
        }else{
            return res.status(403).json({ok: false, message: 'No found'});
        }
    }

}
export const contactController = new ContactController();
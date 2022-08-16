import { request, response } from 'express';
import { SkillQueries } from '../queries/skill.queries.js';
import { Payload } from '../helpers/payload.js';

class SkillController {

    static payload = new Payload();

    async create(req,res) {
        const body = req.body;
        const condition = body.condition;
        const query = await SkillQueries.store(body,condition);
        if(query.ok){
            return res.status(200).json({ok: true, data: query.data});
        }else{
            return res.status(403).json({ok: false, message: 'Error on process request'});
        }
    }

    async find(req, res) {
        const body = req.body;
        const condition = body.condition;
        const query = await SkillQueries.find();
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
        const query = await SkillQueries.findByPk(id,condition);
        if(query.ok){
            return res.status(200).json(query.data);
        }else{
            return res.status(403).json({ok: false, message: 'No found'});
        }
    }

    async update(req,res) {
        const body = req.body;
        const condition = body.condition;
        const {title,urlimg,percentage,experiencetime} = req.body;
        const {id} = req.params;
        const query = await SkillQueries.update(id,title,urlimg,percentage,experiencetime,condition);
        const queryres = await SkillQueries.findByPk(id,condition);
        if(query.ok){
            return res.status(200).json(queryres);
        }else{
            return res.status(403).json({ok: false, message: 'No found'});
        }
    }

    async delete(req,res) {
        const body = req.body;
        const condition = body.condition;
        const {id} = req.params;
        const query = await SkillQueries.delete(id,condition);
        if(query.ok){
            return res.status(200).json({ok: true, data: query.data});
        }else{
            return res.status(403).json({ok: false, message: 'No found'});
        }
    }

}
export const skillController = new SkillController();
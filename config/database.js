import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config()

export const DatabaseConfig = new Sequelize({

    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    dialect: 'mysql',
    port: +process.env.DB_PORT,
    logging: false, 
    pool:{
        max: 5,
        min: 5,
        acquire: 60000,
        idle: 15000,
    }
});

export class Database{

    async connection(){
        try{
            await DatabaseConfig.sync({ force: false });
            return{ok: true, message:'connection to the database established correctly'}
        }catch (e){
            return {ok:false, message:'Could not connect to the database. Please check again the problem', e}
        }
    }
}
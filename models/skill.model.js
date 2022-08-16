import {Model, DataTypes} from 'sequelize';
import {DatabaseConfig} from '../config/database.js';

export class SkillModel extends Model {}

SkillModel.init({
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        comment: "null",
        autoIncrement: true
    },
    title:{
        type: DataTypes.STRING (50),
        allowNull: true,
    },
    urlimg:{
        type: DataTypes.STRING (500),
        allowNull: true,
    },
    percentage:{
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    experiencetime:{
        type: DataTypes.TEXT,
        allowNull: true
    }
},  {
    sequelize: DatabaseConfig,
    tableName: 'skill',
    timestamps: false
}

);
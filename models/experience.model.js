import {Model, DataTypes} from 'sequelize';
import {DatabaseConfig} from '../config/database.js';

export class ExperienceModel extends Model {}

ExperienceModel.init({
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        comment: "null",
        autoIncrement: true
    },
    urlimg:{
        type: DataTypes.STRING (500),
        allowNull: true,
    },
    company:{
        type: DataTypes.STRING (50),
        allowNull: true,
    },
    period:{
        type: DataTypes.STRING (50),
        allowNull: true,
    },
    descripcion:{
        type: DataTypes.TEXT,
        allowNull: true
    }
},  {
    sequelize: DatabaseConfig,
    tableName: 'experience',
    timestamps: false
}

);
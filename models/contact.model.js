import {Model, DataTypes} from 'sequelize';
import {DatabaseConfig} from '../config/database.js';

export class ContactModel extends Model {}

ContactModel.init({
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
    urlmap:{
        type: DataTypes.STRING (1000),
        allowNull: true,
    },
    descripcion:{
        type: DataTypes.TEXT,
        allowNull: true
    }
},  {
    sequelize: DatabaseConfig,
    tableName: 'contact',
    timestamps: false
}

);
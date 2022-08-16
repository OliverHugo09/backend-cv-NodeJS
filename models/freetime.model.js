import {Model, DataTypes} from 'sequelize';
import {DatabaseConfig} from '../config/database.js';

export class FreetimeModel extends Model {}

FreetimeModel.init({
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
    subtitle:{
        type: DataTypes.STRING (50),
        allowNull: true,
    },
    descripcion:{
        type: DataTypes.TEXT,
        allowNull: true
    }
},  {
    sequelize: DatabaseConfig,
    tableName: 'freetime',
    timestamps: false
}

);
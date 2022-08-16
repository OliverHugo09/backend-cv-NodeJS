import {Model, DataTypes} from 'sequelize';
import {DatabaseConfig} from '../config/database.js';

export class UserModel extends Model {}

UserModel.init({
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        comment: "null",
        autoIncrement: true
    },
    username:{
        type: DataTypes.STRING (25),
        allowNull: true,
        unique : true
    },
    password:{
        type: DataTypes.STRING(200),
        allowNull: true
    },
    socket_id:{
        type: DataTypes.INTEGER,
        allowNull: true
    },
    online:{
        type: DataTypes.INTEGER,
        allowNull:true
    },
    avatar:{
        type: DataTypes.STRING(255),
        allowNull:true
    }
},  {
    sequelize: DatabaseConfig,
    tableName: 'users',
    timestamps: false,
}

);
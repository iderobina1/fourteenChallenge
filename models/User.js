const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {
    checkPassword (loginPW) {
        return bcrypt.compareSync(loginPW, this,password);
        }
}

User.init(

    {

id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
},

username: {
    type: DataTypes.STRING,
    allowNull: false,
},


password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
        len: [8,10],
        isStrongPassword(value) {
        if (!/[A-Z]/.test(value) || 
            !/[a-z]/.test(value) ||
            !/[0-9]/.test(value) ||
            !/[@!#\$%^&*]/.test(value)) {
            throw new Error('Password does not meet complexity requirements.');
            }
            }
        }
    },

},

{
    hooks:
    as

}




)
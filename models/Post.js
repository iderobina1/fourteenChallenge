const {Model, DataTypes } =require('sequielize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init (
    {
id: { 
type: DataTypes.INTEGER,
allownull: false,
primaryKey: true,
autoIncrement: true,
},

title: {
type: DataTypes.INTEGER,
allownull: false,
},

content: {
    type: DataTypes.STRING,
    allowNull: false,

},

user_id: {
type: DataTypes.INTEGER,
references: {
    model: 'user',
    key: 'id',
}
}
    },
{
sequelize,
freezeTableName: true,
underscored: true,
modelName: 'post'

}
);

module.exports = Post;

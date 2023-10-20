const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTO(User, {
    foreignKey: 'user_id'
});

Comment.hasMany(User, {
    foreignKey: 'user_id'
});

Comment.belongsTO(Post, {
    foreignKey: 'post'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
});
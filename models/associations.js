const Posts = require('../models/posts')
const Categories = require('../models/category')

Categories.hasMany(Posts, {
    foreignKey: 'categoryId'
})

Posts.belongsTo(Categories)
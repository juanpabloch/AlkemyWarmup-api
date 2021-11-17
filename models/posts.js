const { DataTypes } = require('sequelize')
const sequelize = require('../database/db')

const Posts = sequelize.define('posts', {
    title: {
        type: DataTypes.STRING(60),
        allowNull: false,
        unique: true
    },
    content: {
        type: DataTypes.STRING(999),
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    created: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
}, {
    timestamps: false
})

module.exports = Posts
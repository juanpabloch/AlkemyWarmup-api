const { DataTypes } = require('sequelize')
const sequelize = require('../database/db')

const Categories = sequelize.define('categories', {
    name: {
        type: DataTypes.STRING(60),
        allowNull: false,
        unique: true
    }
}, {
    timestamps: false
})

module.exports = Categories
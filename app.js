require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const routes = require('./routes')

const sequelize = require('./database/db')
require('./models/associations')

app.use(express.json())
app.use(express.urlencoded())

app.use('/', routes)

app.use((req, res)=>{
    res.status(404).json({mgs: "not found"})
})

app.use((err, req, res, next)=>{
    if(err.errors){
        res.status(500).json({error: err.errors[0].message})
    }
    res.status(500).json({error: err.message})
})

app.listen(port, async()=>{
    try {
        console.log(`server listening on port: ${port}`)
        await sequelize.authenticate()
        await sequelize.sync({alter: true})
        console.log('connected to database')
    } catch (error) {
        console.log(`error to connect: ${error}`)
    }
})
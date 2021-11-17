const express = require('express')
const router = express.Router()

const Posts = require('../models/posts')

router.get('/', async(req, res, next)=>{
    try {
        const data = await Posts.findAll()
        res.json(data)
        
    } catch (error) {
        next(error)
    }
})

router.get('/:id', async(req, res, next)=>{
    try {
        const {id} = req.params
        if(!Number(id))throw new Error('invalid ID')
        const post = await Posts.findByPk(id)
        if(!post)throw new Error('Post not found')
        res.json(post)
    } catch (error) {
        next(error)
    }
})

router.post('/', async(req, res, next)=>{
    try {
        
    } catch (error) {
        next(error)
    }
})

module.exports = router
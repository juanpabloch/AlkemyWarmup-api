const express = require('express')
const router = express.Router()

const Posts = require('../models/posts')
const Categories = require('../models/category')

router.get('/', async(req, res, next)=>{
    try {
        const data = await Posts.findAll({
            include: [{model: Categories}],
            attributes: {exclude: ['content', 'categoryId']},
            order: [['created', 'DESC']]
        })
        res.json(data)
        
    } catch (error) {
        next(error)
    }
})

router.get('/:id', async(req, res, next)=>{
    try {
        const {id} = req.params
        if(!Number(id))throw new Error('invalid ID')
        const post = await Posts.findOne({
            where:{id},
            include: [{model: Categories}],
            attributes: {exclude: ['categoryId']}
        })
        if(!post)throw new Error('Post not found')
        res.json(post)
    } catch (error) {
        next(error)
    }
})

router.post('/', async(req, res, next)=>{
    try {
        const post = await Posts.create(req.body)
        console.log(post)
        res.json(post)
    } catch (error) {
        next(error)
    }
})

router.patch('/:id', async(req, res, next)=>{
    try {
        const {id} = req.params
        if(!Number(id))throw new Error('Invalid ID')
    } catch (error) {
        next(error)
    }
})

router.delete('/:id', async(req, res, next)=>{
    try {
        const {id} = req.params
        if(!Number(id))throw new Error('Invalid ID')
        const postDelete = await Posts.destroy({
            where: {id}
        })
        if(postDelete){
            res.json({mgs: "Post successfully deleted"})
        }else{
            res.json({error: "Post not exist"})
        }
    } catch (error) {
        next(error)
    }
})

module.exports = router
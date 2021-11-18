const Posts = require('../models/posts')
const Categories = require('../models/category')

const findAll =  async(req, res, next)=>{
    try {
        const data = await Posts.findAll({
            include: [{model: Categories}],
            attributes: {exclude: ['content', 'categoryId']},
            order: [['created', 'DESC'] ]
        })
        res.status(200).json(data)
        
    } catch (error) {
        next(error)
    }
}

const findById = async(req, res, next)=>{
    try {
        const {id} = req.params
        if(!Number(id))throw new Error('invalid ID')
        const post = await Posts.findOne({
            where:{id},
            include: [{model: Categories}],
            attributes: {exclude: ['categoryId']}
        })
        if(!post)throw new Error('Post not found')
        res.status(200).json(post)
    } catch (error) {
        next(error)
    }
}

const create = async(req, res, next)=>{
    try {
        const post = await Posts.create(req.body)
        res.status(201).json(post)
    } catch (error) {
        next(error)
    }
}

const update = async(req, res, next)=>{
    try {
        const {id} = req.params
        if(!Number(id))throw new Error('Invalid ID')
        const {title, content, image} = req.body
        const postExist = await Posts.findByPk(id)
        if(!postExist)throw new Error('Post not exist')
        console.log(postExist.title)
        const update = {
            title: title || postExist.title,
            content: content || postExist.content,
            image: image || postExist.image
        }

        await Posts.update(update, {
            where: {id}
        })

        const newPost = await Posts.findOne({
            where: {id},
            include: [{model: Categories}],
            attributes: {exclude: ['categoryId']}
        })

        res.status(200).json(newPost)
    } catch (error) {
        next(error)
    }
}

const deletePost = async(req, res, next)=>{
    try {
        const {id} = req.params
        if(!Number(id))throw new Error('Invalid ID')
        const postDelete = await Posts.destroy({
            where: {id}
        })
        if(postDelete){
            res.status(200).json({mgs: "Post successfully deleted"})
        }else{
            res.status(400).json({error: "Post not exist"})
        }
    } catch (error) {
        next(error)
    }
}

module.exports = {
    findAll,
    findById,
    create,
    update,
    deletePost
}
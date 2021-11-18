const Categories = require('../models/category')

const findAll = async(req, res, next)=>{
    try {
        const data = await Categories.findAll()
        res.status(200).json(data)
        
    } catch (error) {
        next(error)
    }
}

const create = async(req, res, next)=>{
    try {
        const category = await Categories.create(req.body)
        res.status(201).json(category)
    } catch (error) {
        next(error)
    }
}

const deleteCategory = async(req, res, next)=>{
    try {
        const {id} = req.params
        if(!Number(id))throw new Error('invalid ID')
        const deleteC = await Categories.destroy({
            where: {
                id
            }
        })
        
        if(deleteC){
            res.status(200).json({mgs: "category successfully delete"})
        }else{
            res.status(400).json({error: "category no exist"})
        }

    } catch (error) {
        next(error)
    }
}

module.exports = {
    findAll,
    create,
    deleteCategory
}
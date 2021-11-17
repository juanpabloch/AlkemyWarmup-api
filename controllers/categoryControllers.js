const Categories = require('../models/category')

const findAll = async(req, res, next)=>{
    try {
        const data = await Categories.findAll()
        res.json(data)
        
    } catch (error) {
        next(error)
    }
}

const create = async(req, res, next)=>{
    try {
        const category = await Categories.create(req.body)
        res.json(category)
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
            res.json({mgs: "category successfully delete"})
        }else{
            res.json({error: "category no exist"})
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
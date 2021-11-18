const categoryName = (req, res, next)=>{
    try {
        const { name } = req.body
        const regexp = /^[a-z0-9]*$/gi
        if(!regexp.test(name.trim()))throw new Error('only letters and numbers')
        if(name.trim().length < 3)throw new Error('the name must have 3 or more characters')
        console.log(name)
        next()
    } catch (error) {
        next(error)
    }
}

module.exports = {
    categoryName
}
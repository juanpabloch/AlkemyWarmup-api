const title = (req, res, next)=>{
    try {
        const { title } = req.body
        const regex = /^[a-z0-9 .-_]*$/gi
        if(!regex.test(title.trim()))throw new Error('invalid title')
        if(title.trim().length < 3)throw new Error('the title must have 3 or more characters')
        next()
    } catch (error) {
        next(error)
    }
}

const image = (req, res, next)=>{
    try {
        const { image } = req.body
        const regex = /^.*\.(jpg|png|jpeg)$/gi
        if(!regex.test(image))throw new Error('invalid image')
        next()
    } catch (error) {
        next(error)
    }
}

const content = (req, res, next)=>{
    try {
        const { content } = req.body
        if(content.length === 0)throw new Error("content cannot be empty")
        next()
    } catch (error) {
        next(error)
    }
}

const postValidators = [title, image, content]

module.exports = {
    postValidators
}
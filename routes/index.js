const express = require('express')
const router = express.Router()

const postRoutes = require('./postsRoutes')
const categoryRoutes = require('./categoriesRoutes')

router.get('/', (req, res)=>{
    res.status(200).json({msj: "welcome"})
})

router.use('/posts', postRoutes)
router.use('/categories', categoryRoutes)

module.exports = router
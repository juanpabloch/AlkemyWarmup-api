const express = require('express')
const router = express.Router()

const controllers = require('../controllers/postControllers')

router.get('/', controllers.findAll)

router.get('/:id', controllers.findById)

router.post('/', controllers.create)

router.patch('/:id', controllers.update)

router.delete('/:id', controllers.deletePost)

module.exports = router
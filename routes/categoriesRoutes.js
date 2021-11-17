const express = require('express')
const router = express.Router()

const controllers = require('../controllers/categoryControllers')

router.get('/', controllers.findAll)

router.post('/', controllers.create)

router.delete('/:id', controllers.deleteCategory)

module.exports = router
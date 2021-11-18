const express = require('express')
const router = express.Router()

const controllers = require('../controllers/categoryControllers')
const validators = require('../validations/categoryValidators')

router.get('/', controllers.findAll)

router.post('/', validators.categoryName, controllers.create)

router.delete('/:id', controllers.deleteCategory)

module.exports = router
const express = require('express')
const router = express.Router()

const controllers = require('../controllers/postControllers')
const validators = require('../validations/postValidators')

router.get('/', controllers.findAll)

router.get('/:id', controllers.findById)

router.post('/', validators.postValidators, controllers.create)

router.patch('/:id', controllers.update)

router.delete('/:id', controllers.deletePost)

module.exports = router
const Router = require('express').Router()
const indexController = require('../controllers/index.controller')

Router.get('/', indexController.getIndex)
Router.post('/')

module.exports = Router
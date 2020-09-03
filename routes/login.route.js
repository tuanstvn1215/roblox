const Router = require('express').Router()
const loginController = require('../controllers/login.controller')

Router.get('/login', loginController.getIndex);
Router.post('/login')

module.exports = Router
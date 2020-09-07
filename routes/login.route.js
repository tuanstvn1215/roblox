const Router = require('express').Router()
var loginController = require('../controllers/login.controller')

Router.get('/login', loginController.getIndex)
Router.post('/login', loginController.postIndex)

Router.get('/login/signup', loginController.getSignup)
Router.post('/login/signup', loginController.postSignup)

Router.get('/login/logout', loginController.getLogout)

module.exports = Router
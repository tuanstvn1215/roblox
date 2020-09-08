const userController = require('../controllers/user.controller')
const Router = require('express').Router();

Router.get('/user', userController.getIndex)
Router.post('/user', userController.postIndex)
module.exports = Router
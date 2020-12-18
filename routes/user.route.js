const userController = require('../controllers/user.controller')
const Router = require('express').Router();
const acconutController = require('../controllers/account.controller')
Router.get('/user', userController.getIndex)
Router.post('/user', userController.postIndex)

Router.get("/user/account", acconutController.Index)

module.exports = Router
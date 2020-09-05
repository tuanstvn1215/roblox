const Router = require('express').Router()
var loginController = require('../controllers/login.controller')

Router.get('/login', loginController.getIndex)
Router.post('/login', loginController.postIndex)

Router.get('/login/signup', loginController.getSignup)
Router.post('/login/signup', async (req, res) => {

   console.log(req.body)
})

module.exports = Router
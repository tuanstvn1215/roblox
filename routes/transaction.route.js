const Router = require('express').Router()
var transactionController = require('../controllers/trasaction.controller')

Router.get('/transaction', transactionController.getIndex)
Router.get('/transaction/account/:id', transactionController.getCreate)


Router.post('/transaction/account/:id', transactionController.postCreate)


module.exports = Router
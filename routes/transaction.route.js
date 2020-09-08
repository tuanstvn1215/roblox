const Router = require('express').Router()
var transactionController = require('../controllers/trasaction.controller')

Router.get('/transaction', transactionController.getIndex)
Router.get('/transaction/account/:id', (req, res) => {
   res.send('sdfsdfsd')
})


Router.post('/transaction/create/:id', transactionController.postCreate)


module.exports = Router
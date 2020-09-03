Router = require('express').Router()
const adminController = require('../controllers/admin.controller')

Router.get('/admin/accsam', adminController.getaccsam)
Router.post('/admin/accsam')
Router.get('/admin/accsam/delete/:id', )
module.exports = Router
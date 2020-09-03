Router = require('express').Router()

const adminController = require('../controllers/admin.controller')
Router.get('/admin', adminController.getIndex)
Router.post('/admin', adminController.postIndex)

Router.get('/admin/accsam', adminController.getaccsam)
Router.post('/admin/accsam')

Router.get('/admin/accsam/delete/:id', )
Router.get('/admin/ghoul', adminController.getGhoul)
module.exports = Router
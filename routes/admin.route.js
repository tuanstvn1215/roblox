const multer = require('multer')
const adminController = require('../controllers/admin.controller')
const Router = require('express').Router()

// var upload = multer({
//    dest: './public/upload/accghoul'
// })
Router.get('/admin', adminController.getIndex)
Router.post('/admin', adminController.postIndex)

Router.get('/admin/accsam', adminController.getaccsam)
Router.post('/admin/accsam', adminController.postaccsam)

Router.get('/admin/accsam/deleteaccsam/:id', adminController.getDelete)

Router.post('/admin/accsam/deleteaccsam/:id', adminController.postDelete)

Router.get('/admin/ghoul', adminController.getGhoul)

module.exports = Router

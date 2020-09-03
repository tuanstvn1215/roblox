const multer = require('multer')
const adminController = require('../controllers/admin.controller')
const Router = require('express').Router()

var upload = multer({
   dest: './public/upload/accghoul'
})
Router.get('/admin', adminController.getIndex)
Router.post('/admin', adminController.postIndex)

Router.get('/admin/accsam', adminController.getaccsam)
Router.post('/admin/accsam', adminController.postaccsam)

Router.get('/admin/accsam/delete/:id')
Router.get('/admin/ghoul', adminController.getGhoul)
Router.post('/admin/ghoul', upload.single('img'), adminController.postGhoul)
module.exports = Router
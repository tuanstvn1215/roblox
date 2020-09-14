const Router = require('express').Router()
const multer = require('multer')
const acconutController = require('../controllers/account.controller')

const upload = multer({
   dest: './public/upload/account'
})

Router.post('/admin/account/create', upload.single('img'), acconutController.Create)

Router.post('/admin/account/delete', acconutController.Delete)

module.exports = Router
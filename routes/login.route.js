const router = require('express').Router()
const loginController = require('../controllers/login.controller')

router.get('/login', loginController.getIndex);
router.post('/login')

module.exports = router
const router = require('express').Router()
const loginController = require('../controllers/signup.controller')

router.get('/signup', loginController.getIndex);
router.post('/signup')

module.exports = router
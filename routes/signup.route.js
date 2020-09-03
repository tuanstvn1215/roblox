const router = require('express').Router()
const signupcontroller = require('../controllers/signup.controller')

router.get('/signup', signupcontroller.getIndex);
router.post('/signup')

module.exports = router
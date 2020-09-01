const router = require('express').Router()
const Controller = require('../controllers/index.controller')

router.get('/', Controller.getIndex)
router.post('/')

module.exports = router
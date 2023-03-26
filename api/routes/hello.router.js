const router = require('express').Router()

const Validator = require('../middlewares/vaildators/hello.vaildator')
const Controller = require('../controllers/hello.controller')

router.route('/').get(Validator.hello, Controller.hello)

module.exports = router

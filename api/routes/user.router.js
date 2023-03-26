const router = require('express').Router()

const Validator = require('../middlewares/vaildators/user.validation')
const Controller = require('../controllers/user.controller')

router
  .route('/')
  .post(Validator.addUser, Controller.addUser)
  .get(Controller.getAllUsers)

module.exports = router

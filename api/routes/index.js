const router = require('express').Router()

const helloRouter = require('./hello.router')
const userRouter = require('./user.router')

router.use('/hello', helloRouter)
router.use('/user', userRouter)

module.exports = router

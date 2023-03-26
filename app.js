require('dotenv').config()

const express = require('express')
const cors = require('cors')
const router = require('./api/routes/index')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const CLIENT_URL = process.env.CLIENT_URL || '*'
app.use(
  cors({
    origin: CLIENT_URL,
  })
)

app.use(router)

module.exports = app

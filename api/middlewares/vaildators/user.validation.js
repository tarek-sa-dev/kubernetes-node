const joi = require('joi')

const addUser = (req, res, next) => {
  const schema = joi.object({
    username: joi.string().required(),
    password: joi.string().min(8).required(),
  })

  const payload = req.body

  const { error } = schema.validate(payload)

  if (error) {
    return res.status(406).json({
      error: `Error in user data: ${error.message}`,
    })
  } else next()
}

module.exports = { addUser }

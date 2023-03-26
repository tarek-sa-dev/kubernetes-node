const joi = require('joi')

const hello = (req, res, next) => {
  const schema = joi.object({ name: joi.string().required() })

  const payload = req.query

  const { error } = schema.validate(payload)

  if (error) {
    return res
      .status(406)
      .send(`<h1 style="color:red;">Error: ${error.message}.</h1>`)
  } else next()
}

module.exports = { hello }

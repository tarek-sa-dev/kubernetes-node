const User = require('../db/model/user.model')
const bcrypt = require('bcrypt')

const addUser = async (req, res) => {
  /*
   * POST
   *
   * BASE_URL/user
   *
   * user in request body
   */

  const { username, password, gender } = req.body

  try {
    // check if userName registered
    const exists = await User.findOne({ username })

    if (exists) {
      return res.status(409).json({
        success: false,
        message: 'User already registered.',
      })
    }

    // create password hash
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await User.create({
      username,
      password: hash,
    })

    if (!user) {
      return res.status(500).json({
        success: false,
        message: 'An error occured.',
      })
    }

    const userResponse = {
      _id: user._id,
      username: user.username,
    }

    res.status(201).json({
      success: true,
      message: 'User created successfully.',
      user: userResponse,
    })
  } catch (err) {
    console.error(err.message)

    return res.status(500).json({
      success: false,
      message: 'An error occured.',
    })
  }
}

const getAllUsers = async (req, res) => {
  /*
   * GET
   *
   * BASE_URL/user
   *
   */

  try {
    const users = await User.find()

    res.status(201).json({
      success: true,
      totalResults: users.length,
      results: users,
    })
  } catch (err) {
    console.error(err.message)

    return res.status(500).json({
      success: false,
      message: 'An error occured.',
    })
  }
}

module.exports = { addUser, getAllUsers }

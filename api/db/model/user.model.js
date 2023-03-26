const mongoose = require('mongoose')

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      required: true,
      type: String,
      minLength: 8,
      select: false,
    },
  },
  { timestamps: true }
)

const User = mongoose.model('User', UserSchema)

module.exports = User

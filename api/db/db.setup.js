const mongoose = require('mongoose')

module.exports = connectDB = () => {
  const MONGODB_URL = `mongodb://${process.env.USER_NAME}:${process.env.USER_PWD}@${process.env.DB_URL}/kubetestDB?authSource=admin`

  return mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
}

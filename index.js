const server = require('./app')
const connectDB = require('./api/db/db.setup')

const PORT = process.env.PORT || 5005

connectDB()
  .then(() => {
    console.log('Database connected successfully.')
    server.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  })
  .catch((error) => {
    console.error('Process terminated! cannot connect to database.')
    console.error(error.message)
    process.exit(0)
  })

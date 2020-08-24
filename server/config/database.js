const mongoose = require('mongoose')
const mongoUri = process.env.MONGO_URI

const connection = async () => {
  try {
    mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('Connected to database')
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}
module.exports =connection
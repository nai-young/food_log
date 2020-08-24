const express = require('express')
const app = express()
require('dotenv').config()

// Connection to database
const connection = require('./database')
const bodyParser = require('body-parser')
connection()

app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api', require('../routes/index'))


const port = process.env.PORT
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
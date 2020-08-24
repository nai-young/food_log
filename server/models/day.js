const mongoose = require('mongoose')

const daySchema = new mongoose.Schema({
  date: Date,
  exercise: Boolean,
  coffe: Number,
  water: Number,
  study: Number,
  work: Number,
})

module.exports = mongoose.model('Day', daySchema)
const express = require('express')
const router = express.Router()
const Day = require('../models/day')

router.get('/', async (req, res) => {
  const allDay = await Day.find()
  res.json(allDay)
})

router.post('/', (req, res) => {
  Day.create({
    date: new Date,
    exercise: req.body.exercise,
    coffe: req.body.coffe
  })
  res.redirect('/api')
})

module.exports = router

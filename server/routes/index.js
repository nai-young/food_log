const express = require('express')
const router = express.Router()
const Day = require('../models/day')

router.get('/', async (req, res) => {
  const allDay = await Day.find()
  res.json(allDay)
})

router.post('/', (req, res) => {
  Day.collection.insertOne({
    date: new Date(),
    exercise: req.body.exercise,
    coffe: req.body.coffe,
    water: req.body.water,
    study: req.body.study,
    work: req.body.work
  })
  res.redirect('/api')
})
router.delete('/', (req, res) => {
  Day.collection.deleteMany()
  res.redirect('/api')
})

module.exports = router

const express = require('express')
const router = express.Router()
const burger = require('../model/burger')

//routes eh?

router.get('/', (req, res) => {
  burger.all(result => {
    const visibleObject = {
      burgers: result
    }
    console.log("Hi, I'm visible object: ", visibleObject)
    res.render('index', visibleObject)
  })
})

module.exports = router

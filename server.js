const express = require('express')
const PORT = 3000

const app = express()
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

let routes = require('./controllers/burgers_controller')
app.use(routes)

app.listen(PORT, err => {
  if (err) throw err
  console.log(`Listening on port ${PORT}`)
})

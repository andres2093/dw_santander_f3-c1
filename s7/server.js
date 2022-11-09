const express = require('express')

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (request, response) => {
  response.send('<h1>Mi API</h1>')
})

app.use('/api', require('./routes'))

app.listen(8080)
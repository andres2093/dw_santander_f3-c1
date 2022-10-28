const express = require('express')

const app = express()

app.get('/', (request, response) => {
  response.send('Hola mundo!!!')
})

app.listen(8080)
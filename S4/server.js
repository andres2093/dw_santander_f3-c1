const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()
app.use(express.json())

app.get('/', (request, response) => {
  // response.setHeader('Content-Type', 'text/plain')
  response.send(
    fs.readFileSync(
      path.join(__dirname + '/index.html'), { encoding: 'utf-8' }
    )
  )
})

app.listen(8080)
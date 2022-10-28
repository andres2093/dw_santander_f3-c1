const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()
app.use(express.json())

const notes = [
  {
    id: 1,
    title: 'Dummy',
    content: 'Nota dummy'
  }
]

app.get('/notes', (request, response) => {
  response.send(notes)
  // response.json(notes)
})

app.get('/', (request, response) => {
  response.send('<h1>Mi API</h1>')
})

app.get('/archivo', (request, response) => {
  // response.setHeader('Content-Type', 'text/plain')
  response.send(
    fs.readFileSync(
      path.join(__dirname + '/index.html'), { encoding: 'utf-8' }
    )
  )
})



app.listen(8081)
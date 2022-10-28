const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()
app.use(express.json())

let notes = [
  {
    id: 1,
    title: 'Dummy',
    content: 'Nota dummy'
  }
]
// GET -> Obtener notas
app.get('/notes', (request, response) => {
  response.send(notes) 
  // response.json(notes)
})
// POST -> Añadir nota
app.post('/notes', (request,response) => {
  notes.push(request.body)
  response.send(`Nota ${request.body.id} agregada`)
})
// PATCH -> Editar nota
app.patch('/notes', (request,response) => {
  notes[request.body.id - 1] = request.body
  response.send(`Nota ${request.body.id} modificada`)
})
// DELETE -> Eliminar nota
app.delete('/notes', (request,response) => {
  notes = notes.filter(note => note.id !== request.body.id)
  response.send(`Nota ${request.body.id} eliminada`)
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
const express = require('express')
const router = express.Router()

let notes = [
  {
    id: 1,
    title: 'Dummy',
    content: 'Nota dummy'
  }
]
// GET -> Obtener notas
router.get('/', (request, response) => {
  response.send(notes) 
  // response.json(notes)
})
// POST -> Añadir nota
router.post('/', (request,response) => {
  notes.push(request.body)
  response.send(`Nota ${request.body.id} agregada`)
})
// PATCH -> Editar nota
router.patch('/', (request,response) => {
  notes[request.body.id - 1] = request.body
  response.send(`Nota ${request.body.id} modificada`)
})
// DELETE -> Eliminar nota
router.delete('/', (request,response) => {
  notes = notes.filter(note => note.id !== request.body.id)
  response.send(`Nota ${request.body.id} eliminada`)
})

module.exports = router
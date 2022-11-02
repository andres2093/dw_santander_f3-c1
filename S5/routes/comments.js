const express = require('express')
const router = express.Router()

let data = [
  {
    id: 1,
    comment: 'Quiero saber más',
    post: 1,
    user: 1
  },
  {
    id: 2,
    comment: 'No estoy de acuerdo',
    post: 2,
    user: 2
  }
]
// GET -> Obtener
router.get('/', (request, response) => {
  response.send(data) 
})
// POST -> Añadir
router.post('/', (request,response) => {
  data.push(request.body)
  response.send(`${request.body.id} agregado`)
})
// PATCH -> Editar
router.patch('/', (request,response) => {
  data[request.body.id - 1] = request.body
  response.send(`${request.body.id} modificado`)
})
// DELETE -> Eliminar
router.delete('/', (request,response) => {
  data = data.filter(item => item.id !== request.body.id)
  response.send(`${request.body.id} eliminada`)
})

module.exports = router
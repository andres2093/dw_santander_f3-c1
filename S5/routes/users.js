const express = require('express')
const router = express.Router()

let data = [
  {
    id: 1,
    name: 'Andrés',
    lastname: 'Ramírez',
    image: '/profile/andres.jpg',
    type: 1,
    bio: 'Programador'
  },
  {
    id: 2,
    name: 'Carlos',
    lastname: 'Cortés',
    image: '/profile/carlos.jpg',
    type: 2,
    bio: 'Consultor'
  }
]
// GET -> Obtener
router.get('/', (request, response) => {
  response.send(data) 
})
// POST -> Añadir
router.post('/', (request,response) => {
  data.push(request.body)
  response.send(`Usuario ${request.body.id} agregada`)
})
// PATCH -> Editar
router.patch('/', (request,response) => {
  data[request.body.id - 1] = request.body
  response.send(`User ${request.body.id} modificado`)
})
// DELETE -> Eliminar
router.delete('/', (request,response) => {
  data = data.filter(user => user.id !== request.body.id)
  response.send(`User ${request.body.id} eliminada`)
})

module.exports = router
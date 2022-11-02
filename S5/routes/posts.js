const express = require('express')
const router = express.Router()

let data = [
  {
    id: 1,
    title: 'Soft skills: El camino al liderazgo',
    content: 'En un mundo tan competitivo como el de hoy, las soft skills son un requerimiento para los líderes que buscan destacar en cualquier industria.',
    category: 'negocios',
    author: 1
  },
  {
    id: 2,
    title: '¿Por qué elegir Swift para crear tu app?',
    content: 'Debido al gran crecimiento del desarrollo de apps móviles, se han originado tecnologías para la creación de aplicaciones como Kotlin para Android y Swift para iOS.',
    category: 'tecnologia',
    author: 2
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
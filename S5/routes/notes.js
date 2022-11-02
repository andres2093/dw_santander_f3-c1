const { response } = require('express')
const express = require('express')
const router = express.Router()
const sequelize = require('../config/database')

// GET -> Obtener notas
router.get('/', async (req, res) => {
  return await sequelize.models.Notes.findAll()
    .then(data => res.json(data))
    .catch(err => res.json({ message: 'Error', data: err }))
})
// POST -> Añadir nota
router.post('/', async (req,res) => {
  const { body } = req
  return await sequelize.models.Notes.create({
    heading: body.heading,
    content: body.content
  })
    .then(data => res.json({ message: 'Created', data }))
    .catch(err => res.json({ message: 'Error', data: err }))
})
// PUT -> Editar nota
router.put('/:id', async (req,res) => {
  const { body, params: { id } } = req
  const Note = await sequelize.models.Notes.findOne({
    where: { id: id }
  })
  if (!Note){
    return res.status(404).json({ message: 'Note not found' })
  }
  const data = await Note.update({
    heading: body.heading,
    content: body.content
  })
  return res.json({ message: 'Updated', data })
})
// DELETE -> Eliminar nota
router.delete('/:id', async (req,res) => {
  const { params: { id } } = req
  const Note = await sequelize.models.Notes.findOne({
    where: { id: id }
  })
  if (!Note){
    return res.status(404).json({ message: 'Note not found' })
  }
  const data = await Note.destroy()
  return res.json({ message: 'Deleted', data })
})

module.exports = router
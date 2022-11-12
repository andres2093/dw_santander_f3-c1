const express = require('express');
const router = express.Router();
const sequelize = require('../config/db')
const permission = require('../middlewares/permission')
const { Op } = require('sequelize')

// Get all products
router.get('/', permission('admin', 'client'), async (req, res) => {
  return await sequelize.models.products.findAndCountAll()
    .then(data => res.json(data))
    .catch(err => res.json({ message: 'Error', data: err }))
});

router.get('/:price/:brand/:search', permission('admin', 'client'), async (req, res) => {
  const { params: { price, brand, search } } = req
  return await sequelize.models.products.findAndCountAll({
    where: {
      name: { [Op.like]: `%${search}%` }
      // [Op.or]: [
      //   { price: price },
      //   { description: brand }
      // ]
    }
  })
    .then(data => res.json(data))
    .catch(err => res.json({ message: 'Error', data: err }))
});

router.get('/:offset/:limit', permission('admin', 'client'), async (req, res) => {
  let { params: { offset, limit } } = req
  offset = parseInt(offset)
  limit = parseInt(limit)
  return await sequelize.models.products.findAndCountAll({
      offset,
      limit
  })
    .then(data => res.json(data))
    .catch(err => res.json({ message: 'Error', data: err }))
});

// Create a new product
router.post('/', async (req, res) => {
  const { body } = req;
  const product = await sequelize.models.products.create({
    name: body.name,
    description: body.description,
    price: body.price,
    image: body.image,
  });
  await product.save();
  return res.status(201).json({ data: product })
});

// Update a product by id
router.put('/:id', async (req, res) => {
  const { body, params: { id } } = req;
  const product = await sequelize.models.products.findByPk(id);
  if (!product) {
    return res.status(404).json({ code: 404, message: 'Product not found' });
  }
  const updatedProduct = await product.update({
    name: body.name,
    description: body.description,
    price: body.price,
    image: body.image,
  });
  return res.json({ data: updatedProduct });
});

// Delete a product by id
router.delete('/:id', async (req, res) => {
  const { params: { id } } = req;
  const product = await sequelize.models.products.findByPk(id);
  if (!product) {
    return res.status(404).json({ code: 404, message: 'Product not found' });
  }
  await product.destroy();
  return res.json();
});

module.exports = router;
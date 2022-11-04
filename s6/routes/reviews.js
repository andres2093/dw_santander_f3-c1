const express = require('express');
const router = express.Router();
const sequelize = require('../config/db');

// Get all reviews
router.get('/', async (req, res) => {
  return await sequelize.models.reviews.findAndCountAll()
    .then(data => res.json(data))
    .catch(err => res.json({ message: 'Error', data: err }))
});

// Creating a new review
router.post('/', async (req, res) => {
  const { body } = req;
  const review = await sequelize.models.reviews.create({
    content: body.content,
    productId: body.productId,
  });
  await review.save();
  return res.status(201).json({ data: review });
});

// Update a review by id
router.put('/:id', async (req, res) => {
  const { body, params: { id } } = req;
  const review = await sequelize.models.reviews.findByPk(id);
  if (!review) {
    return res.status(404).json({ code: 404, message: 'Product not found' });
  }
  const updatedReview = await product.update({
    content: body.content,
    productId: body.productId,
  });
  return res.json({ data: updatedReview });
});

// Delete a review by id
router.delete('/:id', async (req, res) => {
  const { params: { id } } = req;
  const review = await sequelize.models.reviews.findByPk(id);
  if (!review) {
    return res.status(404).json({ code: 404, message: 'Review not found' });
  }
  await review.destroy();
  return res.json();
});

module.exports = router;
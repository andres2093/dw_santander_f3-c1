const express = require('express');
const router = express.Router();
const sequelize = require('../config/db');
const permission = require('../middlewares/permission')

// Get all orders
router.get('/', permission('admin', 'client'), async (req, res) => {
  const orders = await sequelize.models.orders.findAndCountAll();
  return res.status(200).json({ data: orders });
});

router.get('/:id', permission('admin'), async (req, res) => {
  const { params: { id } } = req;
  // const order = await sequelize.models.orders.findByPk(id)
  const order = await sequelize.models.orders.findOne({
                  where: { id },
                  // include: sequelize.models.users
                  // include: [
                  //   sequelize.models.users,
                  //   sequelize.models.products
                  // ],
                  include: [
                    { model: sequelize.models.users, attributes: ['id', 'name', 'firstSurname']},
                    { model: sequelize.models.products, attributes: ['id', 'name', 'price']},
                  ]
  });
  // const orders = await sequelize.models.orders.findAndCountAll();
  return res.status(200).json({ data: order });
});

// Creating a new order
router.post('/', permission('admin'), async (req, res) => {
  const { body } = req;
  const order = await sequelize.models.orders.create({
    userId: body.userId,
    productId: body.productId,
    amount: body.amount,
  });
  await order.save();
  return res.status(201).json({ data: order });
});

// Update a order by id
router.put('/:id', permission('admin'), async (req, res) => {
  const { body, params: { id } } = req;
  const order = await sequelize.models.orders.findByPk(id);
  if (!order) {
    return res.status(404).json({ code: 404, message: 'order not found' });
  }
  const updatedOrder = await order.update({
    userId: body.userId,
    productId: body.productId,
    amount: body.amount,
  });
  return res.json({ data: updatedOrder });
});

// Delete a order by id
router.delete('/:id', permission('admin'), async (req, res) => {
  const { params: { id } } = req;
  const order = await sequelize.models.orders.findByPk(id);
  if (!order) {
    return res.status(404).json({ code: 404, message: 'order not found' });
  }
  await order.destroy();
  return res.json();
});

module.exports = router;
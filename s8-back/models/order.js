// /models/order.js
const { DataTypes, Sequelize } = require('sequelize');

module.exports = (sequelize) => sequelize.define('orders', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  productId: {
    type: Sequelize.INTEGER,
    references: {
      model: 'products',
      key: 'id',
    },
    onDelete: 'CASCADE',
  },
  userId: {
    type: Sequelize.INTEGER,
    references: {
      model: 'users',
      key: 'id',
    },
    onDelete: 'CASCADE',
  },
  amount: Sequelize.INTEGER
}, {
  hooks: {
    beforeCreate: function (order, options) {
      order.createdAt = new Date();
      order.updatedAt = new Date();
    },
    beforeUpdate: function (order, options) {
      order.updatedAt = new Date();
    },
  },
});
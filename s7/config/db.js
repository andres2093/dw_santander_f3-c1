const { Sequelize } = require('sequelize')

const productModel = require('../models/product')
const reviewModel = require('../models/review')
const userModel = require('../models/user')
const orderModel = require('../models/order')

const sequelize = new Sequelize(
  'sesion6',
  'root',
  '123456',
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    logging: false
  }
)

const models = [ productModel, reviewModel, userModel, orderModel ]

for(let model of models)
  model(sequelize)

// Configuring relations
const { products, reviews, users, orders } = sequelize.models;
reviews.belongsTo(products); // Relation one-to-one in reviews table
orders.belongsTo(users); // Relation: Order has one user
orders.belongsTo(products); // Relation: Order has one product

module.exports = sequelize
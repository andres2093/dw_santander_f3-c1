const { Sequelize } = require('sequelize')

const productModel = require('../models/product')
const reviewModel = require('../models/review')
const userModel = require('../models/user')

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

const models = [ productModel, reviewModel, userModel ]

for(let model of models)
  model(sequelize)

// Configuring relations
const { products, reviews } = sequelize.models;
reviews.belongsTo(products); // Relation one-to-one in reviews table

module.exports = sequelize
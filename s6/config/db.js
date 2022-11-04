const { Sequelize } = require('sequelize')

const productModel = require('../models/product')
const reviewModel = require('../models/review')

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

const models = [ productModel, reviewModel ]

for(let model of models)
  model(sequelize)

module.exports = sequelize
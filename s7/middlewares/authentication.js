// authetication.js
const { response } = require('express')
const jwt = require('jsonwebtoken')
const sequelize = require('../config/db')

const authenticate = (req, res, next) => {
  const { authorization } = req.headers

  jwt.verify(authorization, 'secretKey', async (err, decoded) => {
    if(err) return res.status(401).json({ message: 'Unauthorized!' })
    req.user = await sequelize.models.users.findOne({ where: { id: decoded.userId } })
    next()
  })
}

module.exports = authenticate
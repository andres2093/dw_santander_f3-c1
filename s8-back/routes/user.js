const express = require('express');
const router = express.Router();
const sequelize = require('../config/db');

// Get all users
router.get('/', async (req, res) => {
  return await sequelize.models.users.findAndCountAll()
    .then(data => res.json(data))
    .catch(err => res.json({ message: 'Error', data: err }))
});

module.exports = router;
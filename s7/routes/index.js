const express = require('express')
const router = express.Router()

router.use('/users', require('./user'))
router.use('/products', require('./products'))
router.use('/reviews', require('./reviews'))

module.exports = router
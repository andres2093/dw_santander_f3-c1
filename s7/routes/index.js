const express = require('express')
const router = express.Router()

router.use('/auth', require('./auth'))
router.use('/users', require('./user'))
router.use('/products', require('./products'))
router.use('/reviews', require('./reviews'))
router.use('/orders', require('./orders'))

module.exports = router
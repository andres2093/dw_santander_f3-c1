const express = require('express')
const router = express.Router()

router.use('/products', require('./products'))
router.use('/reviews', require('./reviews'))

module.exports = router
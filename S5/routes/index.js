const express = require('express')
const router = express.Router()

router.use('/notes', require('./notes'))

module.exports = router
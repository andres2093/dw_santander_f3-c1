const express = require('express')
const router = express.Router()

router.use('/notes', require('./notes'))
router.use('/users', require('./users'))
router.use('/posts', require('./posts'))
router.use('/comments', require('./comments'))

module.exports = router
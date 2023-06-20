const express = require('express')
const router = express.Router()

const sobrenosControllers = require('../controllers/indexControllers')
router.get('/', sobrenosControllers.index)

module.exports = router
const express = require('express')
const router = express.Router()
const verifyUserLogged = require('../middlewares/verifyUserLogged')
const carrinhoControllers = require('../controllers/carrinhoControllers')
router.get('/', verifyUserLogged, carrinhoControllers.index)
router.get('/checkout', carrinhoControllers.getCheckoutPage)

module.exports = router
const path = require('path')

const carrinhoControllers = {
    index: (req, res) => {
        res.render('carrinho')
    },
    getCheckoutPage: (req, res) => {
        res.render('checkout')
}
}

module.exports = carrinhoControllers
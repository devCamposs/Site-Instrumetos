const express = require('express')
const router = express.Router()

const produtosControllers = require('../controllers/produtosControllers')
router.get('/', produtosControllers.index)
router.get('/edit/:id', produtosControllers.edit); 
// router.put('/edit/:id', upload.any(), produtosController.update); 



module.exports = router
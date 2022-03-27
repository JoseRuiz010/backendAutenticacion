const { Router } = require('express')
const productsCtl= require('../controllers/products.Controllers')
const router = Router()

router.post('/',productsCtl.createProducts)
router.get('/',productsCtl.getProducts)
router.get('/:productId',productsCtl.getProductsById)
router.put('/:productId',productsCtl.updateProducts)
router.delete('/:productId',productsCtl.deleteProductById)

module.exports= router
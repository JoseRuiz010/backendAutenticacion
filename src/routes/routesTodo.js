const { Router } = require('express')
const productsCtl = require('../controllers/products.Controllers')
const { verificarToken } = require('../middleware/authJwt')
const router = Router()

router.post('/', verificarToken, productsCtl.createProducts)
router.get('/', productsCtl.getProducts)
router.get('/:productId', productsCtl.getProductsById)
router.put('/:productId', verificarToken, productsCtl.updateProducts)
router.delete('/:productId', verificarToken, productsCtl.deleteProductById)

module.exports = router
const { Router } = require('express')
const authCtl = require('../controllers/authControllers')
const router = Router()

router.post('/singIn',authCtl.singIn)
router.post('/singUp',authCtl.singUp)


module.exports= router
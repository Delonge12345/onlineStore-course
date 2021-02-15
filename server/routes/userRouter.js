const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')

//Add request to route
router.post('/registration',userController.registration)
router.post('/login',userController.login)
router.get('/auth',userController.checkRole)


module.exports = router
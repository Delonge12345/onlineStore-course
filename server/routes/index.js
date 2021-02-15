const Router = require('express')
const router = new Router()


//import routers
const deviceRouter = require('./deviceRouter')
const brandRouter = require('./brandRouter')
const typeRouter = require('./typeRouter')
const userRouter = require('./userRouter')

//Add under routes
router.use('/user',userRouter)
router.use('/brand',brandRouter)
router.use('/device',deviceRouter)
router.use('/type',typeRouter)


module.exports = router
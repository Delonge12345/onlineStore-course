const Router = require('express')
const router = new Router()


//Add request to route
router.post('/registration',)
router.post('/login',)
router.get('/auth',(req, res) => {
    res.json({message:'Working!'})
})



module.exports = router
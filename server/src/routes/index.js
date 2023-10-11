const { Router } = require('express')
const controllers = require('../controllers')



const route = Router()


route.get('/', (req, res) => {
    const a = controllers.saludar()
    res.send(a)
})



module.exports = route
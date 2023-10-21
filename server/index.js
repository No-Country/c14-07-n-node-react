require("dotenv").config()
const app = require('./src/app')
const { PORT } = require("./src/config/env.d")
require('./src/db')



app.listen(PORT, () => console.log(`Corriendo en el puerto ${PORT}`))  

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

////// Inicialización
const app = express()


////// Configuracion


////// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());


////// Routes
app.use("/test", require("./routes/index.js"))



module.exports = app
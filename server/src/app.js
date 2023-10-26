const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { router } = require("./routes/index");

////// Inicialización
const app = express()


////// Configuracion


////// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());


////// Routes
app.use("/test", router);



module.exports = app
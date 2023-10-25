const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const mongoose = require("mongoose");
const compression = require("compression");
require("dotenv").config();

const app = express();

app.use(express.json()).use(cors()).use(helmet()).use(compression());

// DB connection
require('./src/mongoose');

// Use routes
const routes = require('./src/routes');
app.use(routes);

// Init server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Ejecutandose en el puerto:${PORT}`)
});

const express = require("express");
const route = require("./routes/index.js");


const app = express()





// Routes
app.use("/test", route)

module.exports = app
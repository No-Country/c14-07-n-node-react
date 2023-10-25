const router = require("express").Router();

require("express-async-errors");

const AuthsRoutes = require('./routes/AuthsRoutes');


router.use('/auth', AuthsRoutes);

module.exports = router;

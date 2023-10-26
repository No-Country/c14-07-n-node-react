const router = require("express").Router();

require("express-async-errors");

const AuthsRoutes = require('./routes/AuthsRoutes');
const BarberRoutes = require('./routes/BarberRoutes');


router.use('/auth', AuthsRoutes);
router.use('/barber', BarberRoutes);

module.exports = router;

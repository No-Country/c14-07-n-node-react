const router = require("express").Router();

require("express-async-errors");

const AuthsRoutes = require('./routes/AuthsRoutes');
const BarberRoutes = require('./routes/BarberRoutes');


router.use('/api/auth', AuthsRoutes);
router.use('/api/barber', BarberRoutes);

module.exports = router;

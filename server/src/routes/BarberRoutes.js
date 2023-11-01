const router = require("express").Router();
const { isAuthenticated } = require('../middlewares/ValidateToken');

const BarberController = require('../controllers/BarberController');

router.post('/create', isAuthenticated, BarberController.createBarber);

module.exports = router;

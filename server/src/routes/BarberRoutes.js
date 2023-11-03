const router = require("express").Router();
const { isAuthenticated } = require('../middlewares/ValidateToken');

const BarberController = require('../controllers/BarberController');

router.post('/create', isAuthenticated, BarberController.createBarber);
router.get('/list', isAuthenticated, BarberController.getBarbers);

module.exports = router;

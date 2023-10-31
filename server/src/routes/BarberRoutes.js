const router = require("express").Router();

const BarberController = require('../controllers/BarberController');

router.post('/create', BarberController.createBarber);

module.exports = router;

const router = require("express").Router();

const AuthsController = require('../controllers/AuthController');

router.post('/signup', AuthsController.signup);

module.exports = router;

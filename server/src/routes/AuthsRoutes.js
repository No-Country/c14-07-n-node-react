const router = require("express").Router();

const AuthsController = require('../controllers/AuthController');

router.post('/signup', AuthsController.signup);
router.post('/login', AuthsController.login);

module.exports = router;

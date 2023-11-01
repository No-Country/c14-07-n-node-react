const router = require("express").Router();

const AuthsController = require('../controllers/AuthController');
const { isAuthenticated } = require('../middlewares/ValidateToken');

router.post('/signup', AuthsController.signup);
router.post('/login', AuthsController.login);

router.get('/profile', isAuthenticated, AuthsController.profile);

module.exports = router;

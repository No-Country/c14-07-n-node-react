const { validateSchema } = require('../utils/ValidateSchema');
const { errorHandler } = require('../utils/errors/ErrorHandler');
const { signUpSchema } = require('../schemas/SignUpSchema');
const { loginSchema } = require('../schemas/LoginSchema');

const AuthService = require('../services/AuthService');

const signup = async (req, res, next) => {
  try {
    const body = await validateSchema(signUpSchema, req.body);
    const response = await AuthService.signup(body);

    return res.status(201).send(response);
  } catch (err) {
    return next(errorHandler(err, `Error on ${signup.name}`));
  }
};

const login = async (req, res, next) => {
  try {
    const body = await validateSchema(loginSchema, req.body);
    const response = await AuthService.login(body);

    return res.status(201).send(response);
  } catch (err) {
    return next(errorHandler(err, `Error on ${login.name}`));
  }
};

const profile = async (req, res, next) => {
  return res.send('Entro profile');
};

module.exports = {
  signup,
  login,
  profile,
};

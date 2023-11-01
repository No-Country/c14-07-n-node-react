const Joi = require('joi').extend(require('@hapi/joi-date'));

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
}).options({ stripUnknown: false });

module.exports = {
  loginSchema,
};

const Joi = require('joi').extend(require('@hapi/joi-date'));

const signUpSchema = Joi.object({
  first_name: Joi.string().required(),
  second_name: Joi.string().allow(null),
  surname: Joi.string().required(),
  second_surname: Joi.string().allow(null),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  phone: Joi.string().pattern(/^[0-9]{10}$/).message('Telefono celular invalido').required(),
  age: Joi.number().required(),
  identification_number: Joi.number().required(),
  role: Joi.string().allow(null),
  status: Joi.boolean().default(true).required(),
}).options({ stripUnknown: false });

module.exports = {
  signUpSchema,
};

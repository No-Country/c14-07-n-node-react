const Joi = require('joi').extend(require('@hapi/joi-date'));

const createBarberSchema = Joi.object({
  first_name: Joi.string().required(),
  second_name: Joi.string().allow(null),
  surname: Joi.string().required(),
  second_surname: Joi.string().allow(null),
  email: Joi.string().email().required(),
  picture: Joi.string().allow(null),
  review: Joi.string().allow(null),
  qualification: Joi.number().min(1).max(5).allow(null),
  description: Joi.string().allow(null),
  status: Joi.boolean().default(true).required(),
}).options({ stripUnknown: false });

module.exports = {
  createBarberSchema,
};
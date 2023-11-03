const { validateSchema } = require('../utils/ValidateSchema');
const { errorHandler } = require('../utils/errors/ErrorHandler');
const { createBarberSchema } = require('../schemas/BarberSchema');

const BarberService = require('../services/BarberService');

const createBarber = async (req, res, next) => {
  try {
    const body = await validateSchema(createBarberSchema, req.body);
    const response = await BarberService.createBarber(body);

    return res.status(201).send(response);
  } catch (err) {
    return next(errorHandler(err, `Error on ${createBarber.name}`));
  }
};

const getBarbers = async (req, res, next) => {
  try {
    const response = await BarberService.getBarbers(req.body);

    return res.send(response);
  } catch (err) {
    return next(errorHandler(err, `Error on ${getBarber.name}`));
  }
};

module.exports = {
  createBarber,
  getBarbers,
};

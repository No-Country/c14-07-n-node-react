const { badRequestError, notFoundError } = require('../utils/errors/HttpErrorFactory');
const bcrypt = require("bcrypt");
const Barber = require('../models/BarberModel');

const createBarber = async (body) => {

  const newBarber = new Barber({
    first_name: body.first_name,
    second_name: body.second_name,
    surname: body.surname,
    second_surname: body.second_surname,
    email: body.email,
    picture: body.picture,
    review: body.review,
    qualification: body.qualification,
    description: body.description,
    status: body.status,
  });
  try {
    return newBarber.save();
  } catch (err) {
    return badRequestError(err);
  }
};

const getBarbers = async (body)  => {
  return Barber.find();
};

module.exports = {
  createBarber,
  getBarbers,
};


const { badRequestError } = require('../utils/errors/HttpErrorFactory');
const bcrypt = require("bcrypt");
const User = require('../models/AuthModel');

const signup = async (body) => {
  const hashPassword = await bcrypt.genSalt();
  const password = await bcrypt.hash(body.password,hashPassword);

  const createUser = new User({
    first_name: body.first_name,
    second_name: body.second_name,
    surname: body.surname,
    second_surname: body.second_surname,
    email: body.email,
    password,
    identification_number: body.identification_number,
    age: body.age,
    phone: body.phone,
    role: body.role,
    status: body.status,
    token: body.token,
  });
  try {
    return createUser.save();
  } catch (err) {
    return badRequestError(err);
  }
};

module.exports = {
  signup,
};

const { badRequestError } = require('../utils/errors/HttpErrorFactory');

const bcrypt = require("bcrypt");
const User = require('../models/AuthModel');
const { createAccessToken } = require('../utils/jwt');

const signup = async (body) => {
  const hashPassword = await bcrypt.genSalt();
  const password = await bcrypt.hash(body.password, hashPassword);

  try {
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

    const user = await createUser.save();
    const token = await createAccessToken({ id: user.id });

    return {
      id: user.id,
      first_name: user.first_name,
      second_name: user.second_name,
      surname: user.surname,
      second_surname: user.second_surname,
      email: user.email,
      identification_number: user.identification_number,
      age: user.age,
      phone: user.phone,
      role: user.role,
      token,
    };
  } catch (err) {
    return badRequestError(err);
  }
};

module.exports = {
  signup,
};

const { badRequestError } = require('../utils/errors/HttpErrorFactory');

const validateSchema = async (schema, data) => {
  try {
    const dataValid = await schema.validateAsync(data);

    return dataValid;
  } catch (err) {
    throw badRequestError(err.message);
  }
};

module.exports = {
  validateSchema,
};

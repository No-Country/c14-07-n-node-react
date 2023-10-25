const Errors = require('../errors/HttpErrors');

const { INTERNAL_ERROR, CONFLICT } = Errors;

const HandlerError = function HandlerError(
  message,
  code,
  status,
) {
  this.message = message;
  this.status = status || code;
  this.code = code;
};

const getError = (err, codes) => {
  if(err.code && codes.includes(err.code)) {
    const message = err.message.split('-')[1].trim() || 'ocurrió un error inesperado';
    return new HandlerError(
      message,
      CONFLICT.code,
      CONFLICT.name,
    ); 
  }

  return err;
};

const errorHandler = (err, m, procedureCodes = ['P0001']) => {
  console.error('...executing: errorHandler()', err);

  const e = getError(err, procedureCodes);

  return e.status ? e
    : new HandlerError(
      e.error && e.error.status ? e.error.message : m,
      e.error && e.error.code ? e.error.code : INTERNAL_ERROR.code,
      e.error && e.error.status ? e.error.status : INTERNAL_ERROR.name,
    );
};

const axiosErrorHandler = (err, moduleName = 'NO-MODULE') => {
  if (err.response) {
    const defaultMessage = 'The request was made and the server responded with a status code';
    console.error(`${moduleName}: ${defaultMessage} Error: ${err}`, err);
    const data = err.response.data || {};
    throw new HandlerError(data.message || INTERNAL_ERROR, data.code || INTERNAL_ERROR.code, data.status || INTERNAL_ERROR.name);
  } else if (err.request) {
    const defaultMessage = 'Request made but no response is received from the server';
    console.error(`${moduleName}: ${defaultMessage} Error: ${err}`, err);

    throw new Error({ ...err.request, message: defaultMessage });
  } else {
    const defaultMessage = 'Something happened in setting up the request that triggered an Error';
    console.error(`${moduleName}: ${defaultMessage} Error: ${err}`, err);

    throw new Error({ ...err.response, message: defaultMessage });
  }
};

module.exports = {
  errorHandler,
  HandlerError,
  axiosErrorHandler,
};

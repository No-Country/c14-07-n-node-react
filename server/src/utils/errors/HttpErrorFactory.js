const HttpErrors = require('./HttpErrors');
const { HandlerError } = require('./ErrorHandler');

const {
  BAD_REQUEST,
  CONFLICT,
  NOT_FOUND,
  UNAUTHORIZED,
  SERVICE_UNAVAILABLE,
  INTERNAL_ERROR,
} = HttpErrors;

const badRequestError = (message) => new HandlerError(message, BAD_REQUEST.code, BAD_REQUEST.name);

const conflictError = (message) => new HandlerError(message, CONFLICT.code, CONFLICT.name);

const notFoundError = (message) => new HandlerError(message, NOT_FOUND.code, NOT_FOUND.name);

const unauthorizedError = (message) => new HandlerError(message, UNAUTHORIZED.code, UNAUTHORIZED.name);

const serviceUnavailableError = (message) => new HandlerError(message, SERVICE_UNAVAILABLE.code, SERVICE_UNAVAILABLE.name);

const internalError = (message) => new HandlerError(message, INTERNAL_ERROR.code, INTERNAL_ERROR.name);

module.exports = {
  badRequestError,
  conflictError,
  notFoundError,
  serviceUnavailableError,
  unauthorizedError,
  internalError,
};

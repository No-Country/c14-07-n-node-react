const {
  PORT = 4001,
  USER_DB_NAME = 'api-turnos',
  PASSWORD_DB = 'irSSI68G9syGOtD2',
  DB_NAME = 'turnos-db-local',
  SECRET = 'secret',
} = process.env;

module.exports = {
  PORT,
  USER_DB_NAME,
  PASSWORD_DB,
  DB_NAME,
  SECRET
};

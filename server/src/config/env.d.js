// Puerto
const PORT = process.env.PORT || 3002;


// MongoDB config
const USERNAME_MONGODB = process.env.USERNAME_MONGODB
const PASSWORD_MONGODB = process.env.PASSWORD_MONGODB
const DBANAME_MONGODB = process.env.DBANAME_MONGODB
const SIGN_TOKEN = process.env.SIGN_TOKEN


module.exports = {
    PORT,
    USERNAME_MONGODB,
    PASSWORD_MONGODB,
    DBANAME_MONGODB,
    SIGN_TOKEN
};

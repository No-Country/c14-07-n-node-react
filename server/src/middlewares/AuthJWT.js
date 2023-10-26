const jwt = require("jsonwebtoken");
const { SIGN_TOKEN } = require("../config/env.d");
const { ClassUsers } = require("../controllers/Users.controller");

const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["token"];
    if (!token) throw new Error("Token not send");
    const decoded = jwt.verify(token, SIGN_TOKEN);
    req.accountId = decoded.id;
    next();
  } catch (error) {
    next(Boom.badData(error));
  }
};

const apikey = async (req, res, next) => {
  try {
    const apikeyencoded = req.header("apikey");
    if (apikey == null) throw Error();
    next();
  } catch (error) {
    next(Boom.unauthorized(error));
  }
};

const isUser = async (req, res, next) => {
  try {
    const user = await ClassUsers.getByToken(req.header("token"));
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "No Authorized",
    });
  }
};

module.exports = {
    verifyToken,
    apikey,
    isUser
}
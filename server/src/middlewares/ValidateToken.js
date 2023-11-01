const { conflictError } = require('../utils/errors/HttpErrorFactory');
const jwt = require('jsonwebtoken');
const { SECRET } = require('../configs/index');

const isAuthenticated = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) res.status(401).json({ message: 'Unauthorized' });

  jwt.verify(authorization, SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: 'Invalid token' });

    next()
  });
};

module.exports = {
  isAuthenticated,
};

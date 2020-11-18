const jwt = require('jsonwebtoken');
const { findUserByEmail } = require('../data/store');

module.exports = (req, res, next) => {
  if (!req.headers.authorization) {
    const error = new Error('forbidden');
    error.httpStatusCode = 403;

    return next(error);
  }

  const token = req.headers.authorization.replace('Bearer ', '');

  try {
    const salida = jwt.verify(token, process.env.SECRET, {
      ignoreExpiration: false,
    });
    const user = findUserByEmail(salida.email);
    req.user = user;

    next();
  } catch (err) {
    const error = new Error('forbidden');
    error.httpStatusCode = 403;

    return next(error);
  }
};

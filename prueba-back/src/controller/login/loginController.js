const { validationResult } = require('express-validator');
const { validateUser, generateToken } = require('./service/loginService');

exports.post = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const error = new Error('invalid data');
    error.httpStatusCode = 400;

    return next(error);
  }

  const {
    body: { email, password },
  } = req;

  try {
    const isValid = await validateUser(email, password);

    if (!isValid) {
      const error = new Error('email or password not valid');
      error.httpStatusCode = 400;

      return next(error);
    }
  } catch (err) {
    const error = new Error(err.message);
    error.httpStatusCode = 400;

    return next(error);
  }

  const output = generateToken({ email });

  res.status(200).json(output);
};

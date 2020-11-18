const bcrypt = require('bcrypt');
const { storeUser, findUserByEmail } = require('../../data/store');
const { validationResult } = require('express-validator');

// eslint-disable-next-line no-unused-vars
exports.post = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const error = new Error('invalid data');
    error.httpStatusCode = 400;

    return next(error);
  }

  const {
    body: { name, email, password },
  } = req;

  const user = findUserByEmail(email);

  if (user) {
    const error = new Error('user already exist');
    error.httpStatusCode = 400;

    return next(error);
  }

  const hashedPassword = await bcrypt.hash(password, 12);
  const savedUser = storeUser({ name, email, password: hashedPassword });
  const output = { data: { id: savedUser.id, email: savedUser.email } };

  res.status(201).json(output);
};

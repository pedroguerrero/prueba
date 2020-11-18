const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { findUserByEmail } = require('../../../data/store');

exports.validateUser = async (email, password) => {
  const user = findUserByEmail(email);

  if (!user) {
    throw new Error('user not found');
  }

  const status = await bcrypt.compare(password, user.password);

  return status;
};

exports.generateToken = (payload) => {
  const token = jwt.sign(payload, process.env.SECRET, {
    expiresIn: process.env.TOKEN_TIME,
  });

  return { access_token: token };
};

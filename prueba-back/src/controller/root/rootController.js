const { validationResult } = require('express-validator');
const { findUrlByIdAndUser, getAllDomains } = require('../../data/store');

exports.get = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const error = new Error('invalid id');
    error.httpStatusCode = 400;

    return next(error);
  }

  const {
    params: { id },
  } = req;

  const searchedUrl = findUrlByIdAndUser(id, req.user.email);

  if (!searchedUrl) {
    const error = new Error(`id ${id} not found`);
    error.httpStatusCode = 404;

    return next(error);
  }

  res.status(201).json({ data: { url: searchedUrl.url } });
};

// eslint-disable-next-line no-unused-vars
exports.getAll = (req, res, next) => {
  const domains = getAllDomains(req.user.email);

  res.status(200).json({ data: domains });
};

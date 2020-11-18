module.exports = (req, res, next) => {
  const error = new Error('url not found');
  error.httpStatusCode = 404;

  return next(error);
};

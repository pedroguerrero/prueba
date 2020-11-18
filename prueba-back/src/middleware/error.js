// eslint-disable-next-line no-unused-vars
module.exports = (err, req, res, next) => {
  return res
    .status(err.httpStatusCode || 500)
    .json({ error: err.message, status: err.httpStatusCode || 500 });
};

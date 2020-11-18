const { validationResult } = require('express-validator');
const { storeUrl, findByUrl } = require('../../data/store');
const extractDomain = require('../../utils/extractDomain');

exports.post = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const error = new Error('invalid url');
    error.httpStatusCode = 400;

    return next(error);
  }

  const {
    query: { url },
  } = req;

  const searchedUrl = findByUrl(url, req.user.email);

  if (searchedUrl) {
    return res.status(208).json({ data: { id: searchedUrl.id } });
  }

  const domain = extractDomain(url);

  const shortUrl = {
    url,
    domain,
    userEmail: req.user.email,
  };

  storeUrl(shortUrl);

  res.status(201).json({ data: { id: shortUrl.id } });
};

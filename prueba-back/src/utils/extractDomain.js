const url = require('url');

const extractDomain = (urlStr) => {
  const urlData = url.parse(urlStr);
  const hostParts = urlData.hostname.split('.');
  let domain = urlData.hostname;

  if (hostParts.length > 2) {
    hostParts.splice(0, 1);
    domain = hostParts.join('.');
  }

  return domain;
};

module.exports = extractDomain;

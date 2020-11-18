const { v4: uuidV4 } = require('uuid');
const dataStore = require('./index');

const getAllUsers = () => {
  return dataStore.get('users') || [];
};

const storeUser = (user) => {
  user.id = uuidV4();
  const users = getAllUsers();

  dataStore.set('users', [...users, user]);

  return user;
};

const findUserByEmail = (email) => {
  const users = getAllUsers();
  const user = users.find((user) => user.email === email);

  return user;
};

const getAllUrls = () => {
  return dataStore.get('urls') || [];
};

const getAllUrlsByUser = (user) => {
  const urls = dataStore.get('urls') || [];
  const output = urls.filter((url) => url.userEmail === user);

  return output;
};

const storeUrl = (url) => {
  const urls = getAllUrls();
  url.id = uuidV4();
  dataStore.set('urls', [...urls, url]);

  return url;
};

const findByUrl = (url, user) => {
  const urls = dataStore.get('urls') || [];
  const response = urls.find((el) => el.url === url && el.userEmail === user);

  return response;
};

const findUrlByIdAndUser = (id, user) => {
  const urls = getAllUrls();
  const response = urls.find((el) => el.id === id && el.userEmail === user);

  return response;
};

const getAllDomains = (user) => {
  const domains = {};
  const urls = getAllUrlsByUser(user);

  for (let url of urls) {
    if (!(url.domain in domains)) {
      domains[url.domain] = [];
    }

    domains[url.domain].push(url.url);
  }

  const output = [];
  for (const domain in domains) {
    const data = { domain: domain, urls: domains[domain] };
    output.push(data);
  }

  return output;
};

exports.storeUrl = storeUrl;
exports.findByUrl = findByUrl;
exports.getAllDomains = getAllDomains;
exports.storeUser = storeUser;
exports.findUserByEmail = findUserByEmail;
exports.findUrlByIdAndUser = findUrlByIdAndUser;

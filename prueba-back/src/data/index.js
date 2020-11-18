const path = require('path');
const dataStore = require('data-store');

const localPath = path.resolve(__dirname, 'data.json');

const store = dataStore({ path: localPath });

module.exports = store;

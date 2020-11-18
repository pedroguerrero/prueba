require('dotenv').config();
const cors = require('cors');
const helmet = require('helmet');
const logger = require('morgan');
const express = require('express');
const cookieParser = require('cookie-parser');
const routes = require('./src/routes');

const app = express();

app.use(logger('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(helmet());

app.use(routes);

module.exports = app;

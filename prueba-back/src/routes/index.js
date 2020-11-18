const { Router } = require('express');
const root = require('./root');
const shorten = require('./shorten');
const register = require('./register');
const login = require('./login');
const notFound = require('./notFound');
const errorMiddleware = require('../middleware/error');
const authMiddleware = require('../middleware/auth');

const router = Router();

router.use('/register', register);
router.use('/login', login);
router.use(authMiddleware);
router.use('/', root);
router.use('/shorten', shorten);
router.use('*', notFound);
router.use(errorMiddleware);

module.exports = router;

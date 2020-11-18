const { Router } = require('express');
const { body } = require('express-validator');
const loginController = require('../controller/login/loginController');

const router = Router();

// eslint-disable-next-line no-unused-vars
router.post(
  '',
  [body('email').isEmail(), body('password').isString()],
  loginController.post
);

module.exports = router;

const { Router } = require('express');
const { body } = require('express-validator');
const registerController = require('../controller/register/registerController');

const router = Router();

// eslint-disable-next-line no-unused-vars
router.post(
  '',
  [
    body('name').isString().isLength({ min: 5, max: 100 }),
    body('email').isEmail(),
    body('password').isString().isLength({ min: 6, max: 32 }),
  ],
  registerController.post
);

module.exports = router;

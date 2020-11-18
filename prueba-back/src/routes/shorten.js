const { Router } = require('express');
const { query } = require('express-validator');
const shortenController = require('../controller/shorten/shortenController');

const router = Router();

router.post('', [query('url').isURL()], shortenController.post);

module.exports = router;

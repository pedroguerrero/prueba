const { Router } = require('express');
const { param } = require('express-validator');
const rootController = require('../controller/root/rootController');

const router = Router();

router.get('/domain', rootController.getAll);

// eslint-disable-next-line no-unused-vars
router.get('/:id', [param('id').isUUID()], rootController.get);

module.exports = router;

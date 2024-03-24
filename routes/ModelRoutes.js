const express = require('express');
const router = express.Router();
const { createModel, getModels, getModelById } = require('../controller/modelController');

router.route('/models').post(createModel).get(getModels);
router.route('/models/:id').get(getModelById);

module.exports = router;

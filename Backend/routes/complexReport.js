const express = require('express');

const complexReport = require('../controller/compexReport');

const router = express.Router();

router.get('/:id', complexReport.get);

router.get('/', complexReport.getAllDetails);

module.exports = router;
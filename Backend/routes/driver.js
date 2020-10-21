const express = require('express');

const { body } = require('express-validator');

const driverController = require('../controller/driver');

const router = express.Router();

router.get('/', driverController.fetchAll);

module.exports = router;
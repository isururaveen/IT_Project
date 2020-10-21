const express = require('express');

const completeController = require('../controller/completed_order');

const router = express.Router();

router.get('/', completeController.getAllCompletedOrders);

router.delete('/:id', completeController.deleteCompletedOrders);

router.get('/:id', completeController.get);

module.exports = router;

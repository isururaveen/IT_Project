const express = require('express');

const assignController = require('../controller/assigned_order');

const router = express.Router();

router.get('/', assignController.getAllAssignOrders);

router.get('/:id', assignController.get);

router.post('/', assignController.postAssignOrder);

router.put('/', assignController.putAssignOrder);

router.delete('/:id', assignController.deleteAssignOrders);

module.exports = router;

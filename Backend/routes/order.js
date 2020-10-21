const express = require('express');

const { body } = require('express-validator');

const orderController = require('../controller/order');

const router = express.Router();

router.get('/', orderController.fetchAll);

router.get('/:id', orderController.get);

router.post(
    '/',
    [
        body('order_id').trim().not().isEmpty,
        body('driver_id').trim().not().isEmpty,
        body('assigned_date').trim().not().isEmpty,
        body('delivery_status').trim().not().isEmpty,
    ],  orderController.assign
);

router.put(
    '/',
    [],
        orderController.assign
);

module.exports = router;
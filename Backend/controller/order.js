const { validationResult } =require('express-validator');
  
const Order = require('../models/order');

exports.fetchAll = async(req, res, next) => {
    try {
        const [allOrder] = await Order.fetchAll();
        res.status(200).json(allOrder);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.get = async(req, res, next) => {
    try {
        const [allOrder] = await Order.find(req.params.id);
        res.status(200).json(allOrder);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.assign = async(req, res, next) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) return

    const order_id = req.body.order_id;
    const driver_id = req.body.driver_id;
    const assigned_date = req.body.assigned_date;
    const delivery_status = req.body.delivery_status;

    try{
        const assignedDetails = {
            order_id: order_id,
            driver_id: driver_id,
            assigned_date: assigned_date,
            delivery_status: delivery_status
        }

        Order.update(assignedDetails);

        res.status(201).json({ message: 'Order Assigned!'})
    } catch (err) {
        if(!err.statusCode) {
            err.statusCode = 500;
        }
        next(err)
    }
};
const { validationResult } =require('express-validator');
  
const CompletedOrder = require('../models/completed_order');

exports.getAllCompletedOrders = async (req, res, next) => {
    try {
      const [allCompleteOrders] = await CompletedOrder.fetchAll();
      res.status(200).json(allCompleteOrders);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
};

exports.get = async(req, res, next) => {
  try {
      const order_id = req.params.id;
      const [order] = await CompletedOrder.get(order_id);
      res.status(200).json(order);
  } catch (err) {
      if (!err.statusCode) {
          err.statusCode = 500;
      }
      next(err);
  }
};

exports.deleteCompletedOrders = async (req, res, next) => {
  try {
    const deleteResponse = await CompletedOrder.delete(req.params.id);
    res.status(200).json(deleteResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
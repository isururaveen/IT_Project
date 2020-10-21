const { validationResult } =require('express-validator');
  
const AssignedOrder = require('../models/assignned_order');

exports.getAllAssignOrders = async (req, res, next) => {
    try {
      const [allAssignOrders] = await AssignedOrder.fetchAll();
      res.status(200).json(allAssignOrders);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
};

exports.get = async(req, res, next) => {
  try {
      const [allOrder] = await AssignedOrder.find(req.params.id);
      res.status(200).json(allOrder);
  } catch (err) {
      if (!err.statusCode) {
          err.statusCode = 500;
      }
      next(err);
  }
};

exports.postAssignOrder = async (req, res, next) => {
    try {
        const assignedOrder = {
            order_id: order_id,
            driver_id: driver_id,
            assigned_date: assigned_date,
            delivery_status: delivery_status
        }
      const postResponse = await AssignedOrder.post(req.body.assignedOrder);
      res.status(201).json(postResponse);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
};

exports.putAssignOrder = async (req, res, next) => {
    try {
        const assignedOrder = {
            order_id: order_id,
            driver_id: driver_id,
            assigned_date: assigned_date,
            delivery_status: delivery_status
        }
      const putResponse = await AssignedOrder.update(req.body.id, req.body.assignedOrder);
      res.status(200).json(putResponse);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
};

exports.deleteAssignOrders = async (req, res, next) => {
    try {
      const deleteResponse = await AssignedOrder.delete(req.params.id);
      res.status(200).json(deleteResponse);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
};
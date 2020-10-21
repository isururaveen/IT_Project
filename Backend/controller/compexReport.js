const { validationResult } =require('express-validator');
  
const complexReport = require('../models/complexReport');

exports.get = async(req, res, next) => {
    try {
        const [allDetails] = await complexReport.find(req.params.id);
        res.status(200).json(allDetails);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.getAllDetails = async (req, res, next) => {
    try {
      const [getAllDetails] = await complexReport.fetchAll();
      res.status(200).json(getAllDetails);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
};
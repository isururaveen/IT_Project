const { validationResult } =require('express-validator');
  
const Driver = require('../models/driver');

exports.fetchAll = async(req, res, next) => {
    try {
        const [allDriver] = await Driver.fetchAll();
        res.status(200).json(allDriver);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

const express = require('express');
const router = express.Router();

const foodRouter = require('./food.js');
const activityRouter = require('./activity.js');

router.use(express.json());
router.use('/food', foodRouter);
router.use('/activity', activityRouter);
router.use(function(req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");

  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  next();

});

module.exports = router;
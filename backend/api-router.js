const express = require('express');
const router = express.Router();

const foodRouter = require('./food.js');
const activityRouter = require('./activity.js');

router.use(express.json());
router.use('/food', foodRouter);
router.use('/activity', activityRouter);

module.exports = router;
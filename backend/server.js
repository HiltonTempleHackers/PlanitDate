const express = require('express');
const router = express.Router();
const dateRouter = require('./dateModelRouter/dateRouter.js');
router.use(express.json());
router.use('/date', dateRouter);
module.exports = router;
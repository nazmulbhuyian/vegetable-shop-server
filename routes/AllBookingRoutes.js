

const express = require("express");
const router = express.Router();
const allBookingsControllers = require('../controllers/allBookingsControllers')


router.route('/').get(allBookingsControllers.getallBookings)

module.exports = router;
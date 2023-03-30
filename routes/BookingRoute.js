
const express = require("express");
const router = express.Router();
const bookingControllers = require('../controllers/bookingControllers')


router.route('/').get(bookingControllers.getbooking).post(bookingControllers.postbooking).put(bookingControllers.putbooking)

router.route('/:id').delete(bookingControllers.deletebooking)

module.exports = router;
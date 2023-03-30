const Booking = require("../models/Booking");

exports.getAllBookingService = async () => {
    const booking = await Booking.find({});
    return booking;
}
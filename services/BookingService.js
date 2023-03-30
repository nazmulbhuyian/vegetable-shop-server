const Booking = require("../models/Booking");

exports.getBookingService = async (data) => {
    const booking = await Booking.find(data);
    return booking;
}

exports.postBookingService = async (data) => {
    const booking = await Booking.create(data);
    return booking;
}

exports.putBookingService = async (data) => {
    // const products = await Booking.findById(data.id);
    // const result = await products.set(data).save();
    const result = await Booking.updateOne({_id: data._id}, {$set: {newPrice: data.newPrice, count: data.newCount}});
    return result;
}

exports.deleteBookingService = async (data) => {
    const booking = await Booking.deleteOne({_id: data.id});
    return booking;
}
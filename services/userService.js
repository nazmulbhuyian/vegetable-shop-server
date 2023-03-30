const User = require("../models/User");


exports.postUserService = async (data) => {
    console.log(data);
    const inserted = await User.findOne({ email: data.email })
    if (inserted) {
        return({ message: 'Previously Added' })
    }
    const booking = await User.create(data);
    return booking;
}

exports.getUserService = async () => {
    const booking = await User.find({});
    return booking;
}

exports.putUserService = async (id) => {
    const booking = await User.updateOne({_id: id}, {$set: {role: "admin"}});
    return booking;
}

exports.deleteUserService = async (id) => {
    const booking = await User.deleteOne({_id: id});
    return booking;
}

exports.getAdminService = async (email) => {
    const booking = await User.findOne({email: email});
    return { isAdmin: booking?.role == 'admin' };
}

exports.getSellerService = async (email) => {
    const booking = await User.findOne({email: email});
    return { isSeller: booking?.role == 'seller' || booking?.role == 'admin' }
}


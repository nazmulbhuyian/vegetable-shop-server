const Fish = require("../models/Fish");

exports.getFishService = async () => {
    const vegetable = await Fish.find({});
    return vegetable;
}
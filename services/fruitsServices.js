const Fruits = require("../models/Fruits");

exports.getfruitsService = async () => {
    const vegetable = await Fruits.find({});
    return vegetable;
}
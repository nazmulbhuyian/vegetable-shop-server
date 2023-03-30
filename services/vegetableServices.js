const Vegetable = require("../models/Vegetable");

exports.getVegetableService = async () => {
    const vegetable = await Vegetable.find({});
    return vegetable;
}
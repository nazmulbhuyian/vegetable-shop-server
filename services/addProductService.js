const AddProduct = require("../models/AddProduct");
const Fish = require("../models/Fish");
const Fruits = require("../models/Fruits");
const Vegetable = require("../models/Vegetable");

exports.getProductService = async (data) => {
    const booking = await AddProduct.find(data);
    return booking;
}

exports.postProductService = async (data) => {
    const query = data.cetagory_name;
    if (query == 'vagetable Item') {
        const result1 = await Vegetable.create(data)
    }
    else if (query == 'Fruits Item') {
        const result2 = await Fruits.create(data)
    }
    else {
        const result3 = await Fish.create(data)
    }
    const booking = await AddProduct.create(data);
    return booking;
}
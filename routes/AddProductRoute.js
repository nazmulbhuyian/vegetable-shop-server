
const express = require("express");
const router = express.Router();
const addProductControllers = require('../controllers/addProductControllers')


router.route('/').get(addProductControllers.getproduct).post(addProductControllers.postProduct)


module.exports = router;
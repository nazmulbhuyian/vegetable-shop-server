
const express = require("express");
const router = express.Router();
const vegetableControllers = require('../controllers/vegetableControllers.js')


router.route('/').get(vegetableControllers.getVegetable)

module.exports = router;
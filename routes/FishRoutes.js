
const express = require("express");
const router = express.Router();
const fishControllers = require('../controllers/fishControllers')


router.route('/').get(fishControllers.getFish)

module.exports = router;
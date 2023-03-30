
const express = require("express");
const router = express.Router();
const fruitsControllers = require('../controllers/fruitsControllers')


router.route('/').get(fruitsControllers.getfruits)

module.exports = router;

const express = require("express");
const router = express.Router();
const userControllers = require('../controllers/userController')


router.route('/').get(userControllers.getUser).post(userControllers.postUser)

router.route('/:id').put(userControllers.putUser).delete(userControllers.deleteUser)
router.route('/admin/:email').get(userControllers.getUserAdmin)
router.route('/seller/:email').get(userControllers.getUserSeller)

module.exports = router;
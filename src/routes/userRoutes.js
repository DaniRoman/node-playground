const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController')

router.get('/',userController.funct1);

module.exports = router;
const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController')

router.get('/',mainController.funct1);

module.exports = router;
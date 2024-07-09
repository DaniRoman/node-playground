const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController')

router.post('/',userController.userPost);
router.get('/',userController.userGet);


module.exports = router;
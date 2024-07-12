const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.get(`/`, userController.userGet);
router.post(`/`, userController.userPost);


module.exports = router;

const express = require('express');
const router = express.Router();
const borrowController = require('./borrowController');



router.post('/', controller.borrowBook);
router.get('/', controller.getBorrows);

module.exports = router;

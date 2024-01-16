const express = require('express');
const router = express.Router();
const { getAllItems } = require('../controllers/itemsController');

// A route for getting all items
router.get('/', getAllItems);

module.exports = router;
const express = require('express');
const router = express.Router();
const { getAllCategories } = require('../controllers/categoryController');

// A route for getting all categories
router.get('/', getAllCategories);

module.exports = router;

const Category = require('../models/category');

// Controller function to get all categories
exports.getAllCategories = async (req, res) => {
    try {
        // Use the Category model to find all categories
        const categories = await Category.findAll();
        // Send the categories as a JSON response
        res.json(categories);
    } catch (error) {
        // If an error occurs, send a 500 status code with the error message
        res.status(500).json({ error: error.message });
    }
};

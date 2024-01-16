const Item = require('../models/item');

// Controller function to get all items
exports.getAllItems = async (req, res) => {
    try {
        // Use the Item model to find all items
        const items = await Item.findAll();
        // Send the categories as a JSON response
        res.json(items);
    } catch (error) {
        // If an error occurs, send a 500 status code with the error message
        res.status(500).json({ error: error.message });
    }
};

const Item = require('../models/item');

exports.getAllItems = async (req, res) => {
    try {
        const categories = await Item.findAll();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

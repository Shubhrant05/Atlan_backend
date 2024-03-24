// controllers/modelController.js
const Model = require('../model/Model');

// Controller function to create a new model
exports.createModel = async (req, res) => {
    try {
        const model = await Model.create(req.body);
        res.status(201).json({ success: true, data: model });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
};

// Controller function to get all models
exports.getModels = async (req, res) => {
    try {
        const models = await Model.find();
        res.status(200).json({ success: true, count: models.length, data: models });
    } catch (err) {
        res.status(500).json({ success: false, error: 'Server Error' });
    }
};

// Controller function to get a model by its ID
exports.getModelById = async (req, res) => {
    try {
        const model = await Model.findById(req.params.id);
        if (!model) {
            return res.status(404).json({ success: false, error: 'Model not found' });
        }
        res.status(200).json({ success: true, data: model });
    } catch (err) {
        res.status(500).json({ success: false, error: 'Server Error' });
    }
};

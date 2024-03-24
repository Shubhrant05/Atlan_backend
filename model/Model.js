// models/Model.js
const mongoose = require('mongoose');

const modelSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    provider: { type: String, required: true },
    providerInfo: { type: String },
    likes: { type: Number, default: 0 },
    codeSnippet: { type: String },
    useCases: [{ type: String }],
});

const Model = mongoose.model('Model', modelSchema);

module.exports = Model;

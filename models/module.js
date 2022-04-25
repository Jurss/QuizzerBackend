const mongoose = require('mongoose');

const moduleSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    categoryId: { type: String, require: true },
});

module.exports = mongoose.model('Module', moduleSchema);
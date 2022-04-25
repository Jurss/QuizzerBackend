const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
    question: { type: String, require: true },
    moduleId: { type: String, require: true },
});

module.exports = mongoose.model('Question', questionSchema);
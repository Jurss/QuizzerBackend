const mongoose = require('mongoose');

const answersSchema = mongoose.Schema({
    answerOne: { type: String, require: true },
    answerOneCorrect: { type: Boolean, required: true },
    answerTwo: { type: String, required: true },
    answerTwoCorrect: { type: Boolean, required: true },
    answerThree: { type: String, required: true },
    answerThreeCorrect: { type: Boolean, required: true },
    answerFour: { type: String, required: true },
    answerFourCorrect: { type: Boolean, required: true },
    questionId: { type: String, required: true },
});

module.exports = mongoose.model('Answers', answersSchema);
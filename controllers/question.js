const Question = require('../models/question');

exports.createQuestion = (req, res, next) => {
    const question = new Question({
        question: req.body.question,
        moduleId: req.body.moduleId
    });
    question.save().then(
        () => {
            res.status(201).json({
                message: "question Saved !"
            });
        }
    ).catch((error) => {
        res.status(400).json({ error: error });
    });
};

exports.getOneQuestion = (req, res, next) => {
    Question.findOne({ _id: req.params.id })
        .then((question) => { res.status(200).json(question) })
        .catch((error) => { res.status(404).json({ error: error }) });
};

exports.modifyQuestion = (req, res, next) => {
    const question = new Question({
        _id: req.params.id,
        question: req.body.question,
        moduleId: req.body.moduleId
    });
    Question.updateOne({ _id: req.params.id }, question)
        .then(() => { res.status(200).json({ message: "Question updated !" }) })
        .catch((error) => { res.status(400).json({ error: error }) });
};

exports.deleteQuestion = (req, res, next) => {
    Question.deleteOne({ _id: req.params.id })
        .then(() => { res.status(200).json({ message: "Question deleted!" }) })
        .catch((error) => { res.status(400).json({ error: error }) });
};

exports.getAllQuestion = (req, res, next) => {
    Question.find()
        .then((question) => { res.status(200).json(question) })
        .catch((error) => { res.status(400).json({ error: error }) });
};
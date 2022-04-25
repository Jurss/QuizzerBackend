const Answers = require('../models/answers');

exports.createAnswers = (req, res, next) => {
    const answers = new Answers({
        answerOne: req.body.answerOne,
        answerOneCorrect: req.body.answerOneCorrect,
        answerTwo: req.body.answerTwo,
        answerTwoCorrect: req.body.answerTwoCorrect,
        answerThree: req.body.answerThree,
        answerThreeCorrect: req.body.answerThreeCorrect,
        answerFour: req.body.answerFour,
        answerFourCorrect: req.body.answerFourCorrect,
        questionId: req.body.questionId
    });
    answers.save()
        .then(() => { res.status(200).json({ message: "answers created" }) })
        .catch((error) => { res.status(400).json({ error: error }) });
};

exports.getOneAnswers = (req, res, next) => {
    Answers.find({
            _id: req.params.id
        })
        .then((answers) => res.status(200).json(answers))
        .catch((error) => res.status(404).json({ error }));
};

exports.modifyAnswers = (req, res, next) => {
    const answers = new Answers({
        _id: req.params.id,
        answerOne: req.body.answerOne,
        answerTwo: req.body.answerTwo,
        answerthree: req.body.answerthree,
        answerFour: req.body.answerFour,
    });
    answers.updateOne({ _id: req.params.id }, answers)
        .then(() => { res.status(200).json({ message: "answers update !" }) })
        .catch((error) => res.status(400).json({ error: error }));
};

exports.deleteAnswers = (req, res, next) => {
    Answers.deleteOne({ _id: req.params.id })
        .then(() => { res.status(200).json({ messsage: "answers delete !" }) })
        .catch((error) => { res.status(400).json({ error: error }) })
};

exports.getAllAnswers = (req, res, next) => {
    Answers.find()
        .then((answers) => { res.status(200).json(answers) })
        .catch((error) => { res.status(400).json({ error: error }) });
};
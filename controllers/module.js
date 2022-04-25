const Module = require('../models/module');

exports.createModule = (req, res, next) => {
    const module = new Module({
        title: req.body.title,
        description: req.body.description,
        categoryId: req.body.categoryId
    });
    module.save()
        .then(() => { res.status(200).json({ message: "Module created" }) })
        .catch((error) => { res.status(400).json({ error: error }) });
};

exports.getOneModule = (req, res, next) => {
    Module.findOne({
            _id: req.params.id
        })
        .then((module) => { res.status(200).json(module) })
        .catch((error) => {
            res.status(400);
            json({ error: error })
        });
};

exports.getAllModule = (req, res, next) => {
    Module.find()
        .then((module) => { res.status(200).json(module) })
        .catch((error) => { res.status(400).json({ error: error }) });
};

exports.modifyModule = (req, res, next) => {
    const module = new Module({
        _id: req.params.id,
        title: req.body.title,
        description: req.body.description,
        categoryId: req.body.categoryId
    })
    Module.updateOne({ _id: req.params.id }, module)
        .then(() => { res.status(200).json({ message: "module updated !" }) })
        .catch((error) => { res.status(400).json({ error: error }) });
};

exports.deleteModule = (req, res, next) => {
    Module.deleteOne({ _id: req.params.id })
        .then(() => { res.status(200).json({ message: "Module deleted !" }) })
        .catch((error) => {
            res.status(400);
            json({ error: error })
        });
};
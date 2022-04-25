const Category = require('../models/category');

exports.createCategory = (req, res, next) => {
    const category = new Category({
        title: req.body.title,
        description: req.body.description
    });
    category.save().then(
        () => {
            res.status(201).json({
                message: "Category Saved !"
            });
        }
    ).catch((error) => {
        res.status(400).json({ error: error });
    });
};

exports.getOneCategory = (req, res, next) => {
    Category.find({
            _id: req.params.id
        })
        .then((category) => res.status(200).json(category))
        .catch((error) => res.status(404).json({ error }));
};

exports.modifyCategory = (req, res, next) => {
    const category = new Category({
        _id: req.params.id,
        title: req.body.title,
        description: req.body.description
    });
    Category.updateOne({ _id: req.params.id }, category)
        .then(() => { res.status(200).json({ message: "category update !" }) })
        .catch((error) => res.status(400).json({ error: error }));
};

exports.deleteCategory = (req, res, next) => {
    Category.deleteOne({ _id: req.params.id })
        .then(() => { res.status(200).json({ messsage: "Category delete !" }) })
        .catch((error) => { res.status(400).json({ error: error }) })
};

exports.getAllCategory = (req, res, next) => {
    Category.find()
        .then((category) => { res.status(200).json(category) })
        .catch((error) => { res.status(400).json({ error: error }) });
};
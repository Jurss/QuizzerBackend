const express = require('express');
const router = express.Router();
const categoryCtrl = require('../controllers/category');

router.get('/', categoryCtrl.getAllCategory);
router.post('/', categoryCtrl.createCategory);
router.put('/:id', categoryCtrl.modifyCategory);
router.get('/:id', categoryCtrl.getOneCategory);
router.delete('/:id', categoryCtrl.deleteCategory);

module.exports = router;
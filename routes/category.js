const express = require('express');
const router = express.Router();
const categoryCtrl = require('../controllers/category');
const auth = require('../middleware/auth');

router.get('/', auth, categoryCtrl.getAllCategory);
router.post('/', auth, categoryCtrl.createCategory);
router.put('/:id', auth, categoryCtrl.modifyCategory);
router.get('/:id', auth, categoryCtrl.getOneCategory);
router.delete('/:id', auth, categoryCtrl.deleteCategory);

module.exports = router;
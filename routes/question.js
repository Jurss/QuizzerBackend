const express = require('express');
const router = express.Router();
const questionCtrl = require('../controllers/question');
const auth = require('../middleware/auth');

router.post('/', auth, questionCtrl.createQuestion);
router.get('/:id', auth, questionCtrl.getOneQuestion);
router.put('/:id', auth, questionCtrl.modifyQuestion);
router.delete('/:id', auth, questionCtrl.deleteQuestion);
router.get('/', auth, questionCtrl.getAllQuestion);

module.exports = router;
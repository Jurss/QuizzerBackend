const express = require('express');
const router = express.Router();
const answersCtrl = require('../controllers/answers');

router.get('/', answersCtrl.getAllAnswers);
router.post('/', answersCtrl.createAnswers);
router.put('/:id', answersCtrl.modifyAnswers);
router.get('/:id', answersCtrl.getOneAnswers);
router.delete('/:id', answersCtrl.deleteAnswers);

module.exports = router;
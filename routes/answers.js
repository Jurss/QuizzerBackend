const express = require('express');
const router = express.Router();
const answersCtrl = require('../controllers/answers');
const auth = require('../middleware/auth');

router.get('/', auth, answersCtrl.getAllAnswers);
router.post('/', auth, answersCtrl.createAnswers);
router.put('/:id', auth, answersCtrl.modifyAnswers);
router.get('/:id', auth, answersCtrl.getOneAnswers);
router.delete('/:id', auth, answersCtrl.deleteAnswers);

module.exports = router;
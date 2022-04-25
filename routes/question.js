const express = require('express');
const router = express.Router();
const questionCtrl = require('../controllers/question');

router.post('/', questionCtrl.createQuestion);
router.get('/:id', questionCtrl.getOneQuestion);
router.put('/:id', questionCtrl.modifyQuestion);
router.delete('/:id', questionCtrl.deleteQuestion);
router.get('/', questionCtrl.getAllQuestion);

module.exports = router;
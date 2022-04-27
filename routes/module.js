const express = require('express');
const router = express.Router();
const moduleCtrl = require('../controllers/module');
const auth = require('../middleware/auth');

router.post('/', auth, moduleCtrl.createModule)
router.get('/:id', auth, moduleCtrl.getOneModule)
router.put('/:id', auth, moduleCtrl.modifyModule)
router.delete('/:id', auth, moduleCtrl.deleteModule)
router.get('/', auth, moduleCtrl.getAllModule)

module.exports = router
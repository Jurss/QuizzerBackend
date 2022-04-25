const express = require('express');
const router = express.Router();
const moduleCtrl = require('../controllers/module');

router.post('/', moduleCtrl.createModule)
router.get('/:id', moduleCtrl.getOneModule)
router.put('/:id', moduleCtrl.modifyModule)
router.delete('/:id', moduleCtrl.deleteModule)
router.get('/', moduleCtrl.getAllModule)

module.exports = router
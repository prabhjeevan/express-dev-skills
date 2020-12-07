var express = require('express');
var router = express.Router();
const skillsCtrl = require("../controllers/skills");

/* GET users listing. */
router.get('/', skillsCtrl.index);
router.post('/', skillsCtrl.create);
router.get('/new', skillsCtrl.newSkill);
router.get('/:id', skillsCtrl.show);
router.delete('/:id', skillsCtrl.deleteSkill);

module.exports = router;
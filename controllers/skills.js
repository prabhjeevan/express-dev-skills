
const Skill = require('../models/skill');

function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getAll()
    });
  }

  function show(req, res) {
    res.render('skills/show', {
      skill: Skill.getOne(req.params.id)
    });
  }

  function newSkill(req, res) {
    res.render('skills/new');
  }

  function create(req, res) {
    console.log(req.body);
    Skill.create(req.body);
    res.redirect('/skills');
  }

  function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
  }

  module.exports = {
    index,
    show,
    deleteSkill,
    newSkill,
    create
  };
const skills = [
    {id: 1, skill: 'JavaScript', important: true},
    {id: 2, skill: 'HTML', important : true},
    {id: 3, skill: 'CSS', important: false},
    {id: 4, skill: 'Git', important: true},
    {id: 5, skill: 'jQuery', important: true}
  ];
  
 
  
  function getAll() {
    return skills;
  }

  function getOne(id) {
    return skills.find((skill) => skill.id === parseInt(id));
  }

  function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.important = true;
    skills.push(skill);
  }

  function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
  }


  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  };
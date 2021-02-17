const db = require("../models");
const Alunos = db.alunos;
const Op = db.Op;

// Retrieve all Alunos from the database.
exports.getAllAlunos = (req, res) => {
  // const title = req.query.title;
  // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  console.log('controller ...')
  return res.send('Alunos');

  // Alunos.getAllAlunos()
  //   .then(data => {
  //     res.send('Alunos');
  //   })
  //   .catch(err => {
  //     res.send(500).send({
  //       message: err.message || "Some error accurred while retrieving Alunos."
  //     });
  //   });

};
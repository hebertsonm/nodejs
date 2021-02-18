const db = require("../models");
const Alunos = db.alunos;
const Op = db.Op;

// Retrieve all Alunos from the database.
exports.getAllAlunos = (req, res) => {
  
  Alunos.findAll().then((result) => {
    return res.send(result)
  })

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
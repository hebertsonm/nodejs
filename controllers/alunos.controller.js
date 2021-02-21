const db = require("../models");
const alunos = db.alunos;
const Op = db.Op;

// Retrieve all Alunos from the database.
exports.getAllAlunos = (req, res) => {

  alunos.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.send(500).send({
        message: err.message || "Some error accurred while retrieving Alunos."
      });
    });

};

// Insert data into the Alunos table
exports.insertAlunos = (req, res) => {
  // const aluno = req

  // // Validate request
  // if (!aluno.name) {
  //   res.status(400).send({
  //     message: "Content can not be empty!"
  //   });
  //   return;
  // }

  console.log('req ' + JSON.stringify(req.body))
  
  // Save aluno in database
  alunos.create({
    id: req.body.id,
    name: req.body.name
  })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    console.log(err)
  });
}
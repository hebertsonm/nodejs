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

  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  
  // Save aluno in database
  alunos.create({
    name: req.body.name,
    gender: req.body.gender,
    cpf: req.body.cpf,
    dt_nasc: req.body.dt_nasc,
    dt_admissao: req.body.dt_admissao
  })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    console.log(err)
    res.send(err)
  });
}
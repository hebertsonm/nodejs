const controller = require("../controllers/alunos.controller");
const express = require('express')
const routes = express.Router()

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );

    next();
  });

  app.get('/api/v1/alunos', controller.getAllAlunos);
  // app.post('/api/v1/alunos', controller.insertAlunos);

  app.post('/api/v1/alunos', function(req, res) {
    // const aluno = {
    //   id: 3,
    //   nome: 'kiko',
    //   createdby: Date.now(),
    //   updatedby: Date.now()
    // }
    return controller.insertAlunos(req, res)
  })
}
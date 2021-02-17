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

  app.get("/api/alunos/all", controller.getAllAlunos);
}
const config = require("../config/config.js");
const { Sequelize, DataTypes, Op } = require("sequelize");

const sequelize = new Sequelize(
  config.db.DB_NAME,
  config.db.DB_USER,
  config.db.DB_PASS,
  { dialect: config.db.dialect }
)

const db = {};

db.Sequelize = Sequelize;
db.Op = Op;
db.sequelize = sequelize;

db.alunos = require('./alunos')(sequelize, Sequelize, DataTypes);

module.exports = db;
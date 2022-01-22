module.exports = (sequelize, Sequelize, DataTypes) => {
  const Aluno = sequelize.define(
    "alunos", // Model name
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
      },
      gender: {
        type: DataTypes.CHAR(1),
      },
      cpf: {
        type: DataTypes.CHAR(11)
      },
      dt_nasc: {
        type: DataTypes.DATE,
      },
      dt_admissao: {
        type: DataTypes.DATE,
      }
    }
  )

  // Relations
  // Aluno.associate = (models) => {
  //   Alunos.belongsToMany()
  // }

  return Aluno
}
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
      }
    }
  )

  // Relations
  // Aluno.associate = (models) => {
  //   Alunos.belongsToMany()
  // }

  return Aluno
}
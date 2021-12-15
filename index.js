const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const models = require('./models')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false}))
app.use(express.json())
app.use(cors())

// api routes
require("./routes/alunos.routes")(app);

console.log('index ...')

models.sequelize.sync({}).then(() => {
  const port = process.env.PORT || 8080;
  app.listen(port, console.log(`Express started at http://localhost:%d`,port));
})

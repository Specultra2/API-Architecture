const express = require('express');
const dotEnv = require('dotenv');
const cors = require('cors');
const dbConnection = require('./db/connection')
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs')
const swaggerDocument = YAML.load('./swagger.yaml')
dotEnv.config();

const app = express();

// db connectivity
dbConnection();

// cross origin resource sharing
app.use(cors())

// request payload middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/v1/product', require('./routes/productRoutes'));
app.use('/api/v1/user' , require('./routes/userRoutes'));


// API Documentation

if(process.env.NODE_ENV != 'production') {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
}




app.get('/', (req, res) => {
  res.send('Hello from Node API Server')
})


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`)
})

// error handler middleware
app.use((err, req, res, next) => {
  console.log(err.stack)
  res.status(500).send({
    status: 500,
    message: err.message,
    body: {}
  })
})

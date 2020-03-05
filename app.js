// Third-Party Packages
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const helmet = require('helmet')
const CORS = require('cors')
require('dotenv').config()

// Mongoose Deprecation warnings fix
mongoose.set('useNewUrlParser', true)
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)
mongoose.set('useUnifiedTopology', true)

// Include Routes
const competitionsRoutes = require('./routes/competitions')

// Include Middlewares
const errorMiddlware = require('./middlewares/error') // Error handling middleware

// Initializiation
const app = express()
const PORT = process.env.PORT || 8000
const DB_URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0-ml4p7.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`

// Middlewares
app.use(CORS())
app.use(helmet())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Routes
app.use('/api/cometitions', competitionsRoutes)


app.use(errorMiddlware)

mongoose.connect(DB_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Listening to port ${PORT}`);
            console.log(`http://localhost:${PORT}`);
        })
    })
    .catch(err => console.log(err))
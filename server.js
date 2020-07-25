const express = require('express')
const app = express()
const dotenv = require('dotenv')
const morgan = require('morgan')
const colors = require('colors')
const errorHandler = require('./middleware/error')
const connectDb = require('./config/db')
// const logger = require('./middleware/logger')
// Route filed
const bootcamp = require('./routes/bootcamp')

// Load env files
dotenv.config({ path: './config/config.env' })

// connect to db
connectDb();

app.use(express.json())
// Test server
app.get('/', (req, res) => { res.status(200).send({ name: "Rohan" }) })

// logger middleware
// app.use(logger)
if (process.env.NODE_ENV == 'development') {
    app.use(morgan('dev'))
}

// Mount Routers
app.use('/api/v1/bootcamps', bootcamp)

// Global error handler
app.use(errorHandler)

const port = process.env.PORT || 5000
const server = app.listen(port, () => {
    console.log(`App is Running in ${process.env.NODE_ENV} mode & listening on ${port}!`.yellow.bold)
})


// Handle unhandled Promise rejections
process.on('unhandledRejection', (error, promise) => {
    console.log(`Error : ${error}`.red)
    // close server and exit process
    server.close(() => process.exit(1))
})
const express = require('express')
const app = express()
const dotenv = require('dotenv')
const morgan = require('morgan')

const port = process.env.PORT || 5000
// const logger = require('./middleware/logger')
// Route filed
const bootcamp = require('./routes/bootcamp')

// Load env files
dotenv.config({ path: './config/config.env' })

// Test server
app.get('/', (req, res) => { res.status(200).send({ name: "Rohan" }) })

// logger middleware
// app.use(logger)
if (process.env.NODE_ENV == 'development') {
    app.use(morgan('dev'))
}

// Mount Routers
app.use('/api/v1/bootcamps', bootcamp)

app.listen(port, () => {
    console.log(`App is Running in ${process.env.NODE_ENV} mode & listening on ${port}!`)
})
const express = require('express')
const app = express()

const dotenv = require('dotenv')
dotenv.config({ path: './config/config.env' })
const port = process.env.PORT || 5000

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`App is Running in ${process.env.NODE_ENV} mode & listening on ${port}!`))
const mongoose = require('mongoose')
const colors = require('colors')

module.exports = connectDb = async () => {
    let connection = await mongoose.connect(process.env.MONGO_URI, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    console.log(`Mongo Connected ${connection.connection.host}`.cyan.underline.bold);

}
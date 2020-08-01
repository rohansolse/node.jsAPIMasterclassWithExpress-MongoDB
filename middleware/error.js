const ErrorHandler = require('../utils/errorResponse')

module.exports = errorHandler = (err, req, res, next) => {
    let error = { ...err }
    error.message = err.message

    // log for the developer
    // console.log("error in errorHandler : ", err);

    // Mongoose bad objectId
    if (err.name == 'CastError') {
        let message = `Bootcamp not found with ID : ${err.value}`
        error = new ErrorHandler(message, 404)
    }

    // Mongoose duplicate entry
    if (err.code == 11000) {
        let message = `Duplicate field value entered`
        error = new ErrorHandler(message, 400)
    }
    console.log(err.name)
    if (err.name == "ValidationError") {
        let message = Object.values(err.errors).map(val => val.message)
        error = new ErrorHandler(message.join(", "), 400)
    }

    res.status(error.statusCode || 500).json({
        status: false,
        message: error.message || 'Internal Server Error'
    })
}
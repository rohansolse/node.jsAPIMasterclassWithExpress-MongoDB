const ErrorHandler = require('../utils/errorResponse')

module.exports = errorHandler = (err, req, res, next) => {
    let error = { ...err }
    error.message = err.message

    // log for the developer
    console.log("error in errorHandler : ", err);

    if (err.name == 'CastError') {
        let message = `Bootcamp not found with ID : ${err.value}`
        error = new ErrorHandler(message, 404)
    }
    res.status(error.statusCode || 500).json({
        status: false,
        message: error.message || 'Internal Server Error'
    })
}
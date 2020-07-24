// @desc    Log Request method & Link
module.exports = logger = function (req, res, next) {
    console.log(`${req.method} ${req.protocol}://${req.get('Host')}${req.originalUrl}`)
    next()
}
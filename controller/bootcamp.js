// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getAllBootcamp = async (req, res, next) => {
    res
        .status(200)
        .send("bootcamp")
}

// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps/:id
// @access  Private
exports.getSingleBootcamp = async (req, res, next) => {
    res
        .status(200)
        .send("bootcamp by id")
}

// @desc    Create bootcamps
// @route   POST /api/v1/bootcamps
// @access  Private
exports.createBootcamp = async (req, res, next) => {
    res
        .status(200)
        .send("bootcamp post")
}

// @desc    Update bootcamps
// @route   GET /api/v1/bootcamps/:id
// @access  Private
exports.updateBootcamp = async (req, res, next) => {
    res
        .status(200)
        .send("bootcamp put")
}

// @desc    Delete bootcamps
// @route   DELETE /api/v1/bootcamps/:id
// @access  Private
exports.deleteBootcamp = async (req, res, next) => {
    res
        .status(200)
        .send("bootcamp delete")
}
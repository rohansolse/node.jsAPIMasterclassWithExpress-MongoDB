const Bootcamp = require('../model/bootcamp')

// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getAllBootcamp = async (req, res, next) => {
    try {
        let bootcamp = await Bootcamp.find()
        res.status(200).send({
            status: 'success',
            count: bootcamp.length,
            data: bootcamp
        })
    } catch (error) {
        console.log("error : ", error)
        res.status(400).json({
            status: false
        })
    }
}

// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps/:id
// @access  Private
exports.getSingleBootcamp = async (req, res, next) => {
    try {
        let bootcamp = await Bootcamp.findById(req.params.id)
        if (!bootcamp) {
            res.status(400).json({
                status: false
            })
        }
        res.status(200).json({
            status: 'success',
            data: bootcamp
        })
    } catch (error) {
        console.log("error : ", error)
        res.status(400).json({
            status: false
        })
    }
}

// @desc    Create bootcamps
// @route   POST /api/v1/bootcamps
// @access  Private
exports.createBootcamp = async (req, res, next) => {
    try {
        let bootcamp = await Bootcamp.create(req.body)
        res.status(200).send({
            status: 'success',
            data: bootcamp
        })
    } catch (error) {
        console.log("error : ", error)
        res.status(400).json({
            status: false
        })
    }
}

// @desc    Update bootcamps
// @route   GET /api/v1/bootcamps/:id
// @access  Private
exports.updateBootcamp = async (req, res, next) => {
    try {
        let bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        if (!bootcamp) {
            res.status(400).json({
                status: false
            })
        }
        res.status(200).json({
            status: 'success',
            data: bootcamp
        })
    } catch (error) {
        console.log("error : ", error)
        res.status(400).json({
            status: false
        })
    }
}

// @desc    Delete bootcamps
// @route   DELETE /api/v1/bootcamps/:id
// @access  Private
exports.deleteBootcamp = async (req, res, next) => {
    try {
        let bootcamp = await Bootcamp.findByIdAndDelete(req.params.id)
        if (!bootcamp) {
            res.status(400).json({
                status: false
            })
        }
        res.status(200).json({
            status: 'success',
            data: {}
        })
    } catch (error) {
        console.log("error : ", error)
        res.status(400).json({
            status: false
        })
    }
}
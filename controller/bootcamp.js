const Bootcamp = require('../model/bootcamp')
const asyncHandler = require('../middleware/async')
const ErrorHandler = require('../utils/errorResponse')

// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
// asyncHandler(

// )
exports.getAllBootcamp =
    asyncHandler(
        async (req, res, next) => {
            let bootcamp = await Bootcamp.find()
            res.status(200).send({
                status: 'success',
                count: bootcamp.length,
                data: bootcamp
            })
        }

    )

// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps/:id
// @access  Private
exports.getSingleBootcamp =
    asyncHandler(
        async (req, res, next) => {
            let bootcamp = await Bootcamp.findById(req.params.id)
            if (!bootcamp) {
                return next(new ErrorHandler(`Bootcamp not found with ID : ${req.params.id}`, 404))
            }
            res.status(200).json({
                status: 'success',
                data: bootcamp
            })
        }
    )

// @desc    Create bootcamps
// @route   POST /api/v1/bootcamps
// @access  Private
exports.createBootcamp =
    asyncHandler(
        async (req, res, next) => {
            let bootcamp = await Bootcamp.create(req.body)
            res.status(200).send({
                status: 'success',
                data: bootcamp
            })
        }
    )

// @desc    Update bootcamps
// @route   GET /api/v1/bootcamps/:id
// @access  Private
exports.updateBootcamp =
    asyncHandler(
        async (req, res, next) => {
            let bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                runValidators: true
            })
            if (!bootcamp) {
                return next(new ErrorHandler(`Bootcamp not found with ID : ${req.params.id}`, 404))
            }
            res.status(200).json({
                status: 'success',
                data: bootcamp
            })
        }
    )

// @desc    Delete bootcamps
// @route   DELETE /api/v1/bootcamps/:id
// @access  Private
exports.deleteBootcamp =
    asyncHandler(
        async (req, res, next) => {
            let bootcamp = await Bootcamp.findByIdAndDelete(req.params.id)
            if (!bootcamp) {
                return next(new ErrorHandler(`Bootcamp not found with ID : ${req.params.id}`, 404))
            }
            res.status(200).json({
                status: 'success',
                data: {}
            })
        }
    )
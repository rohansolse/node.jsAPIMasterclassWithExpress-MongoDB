const mongoose = require('mongoose')

const BootcampSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add name"],
        unique: true,
        trim: true,
        maxlength: [50, "Name can not be more than 50 characters"]
    },
    slug: String,
    description: {
        type: String,
        required: [true, "Please add description"],
        maxlength: [500, "description can not be more than 500 characters"]
    },
    website: {
        type: String,
        match: ["https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)",
            "please add valid URL with HTTP or HTTPS"
        ]
    },
    phone: {
        type: String,
        maxlength: [20, "Phone number can not be more that 20 characters"]
    },
    location: {
        type: {
            type: String, // Don't do `{ location: { type: String } }`
            enum: ['Point'], // 'location.type' must be 'Point'
            required: true
        },
        coordinates: {
            type: [Number],
            required: true,
            index: '2dsphere'
        }
    },
    formattedAddress: String,
    street: String,
    city: String,
    state: String,
    zipCode: String,
    country: String,
    carrier: {
        type: [String],
        required: true,
        enum: [
            'Web Development',
            'Mobile Development',
            'UI/UX',
            'Data Science',
            'Business',
            'Other',
        ]
    },
    averageRating: {
        type: Number,
        min: [1, "Rating must be at least 1"],
        max: [10, "Rating can not be more than 10"]
    },
    averageCost: Number,
    photo: {
        type: String,
        default: 'no-photo.jpg'
    },
    housing: {
        type: Boolean,
        default: false
    },
    jobAssistance: {
        type: Boolean,
        default: false
    },
    jonGuarantee: {
        type: Boolean,
        default: false
    },
    acceptGi: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Bootcamp', BootcampSchema)
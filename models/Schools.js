const mongoose = require('mongoose')
const Schema = mongoose.Schema

const membersSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    ID: {
        type: String,
        required: true
    },
    attend: {
        type: Boolean,
        default: false
    }
}, { _id: false})

const supervisorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    ID: {
        type: String,
        required: true
    },
    attend: {
        type: Boolean,
        default: false
    }
}, { _id: false})

const schoolsSechma = new Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: [
            'ICT and Embedded Systems', 
            'Artificial Intelligent',
            'Food Security',
            'Affordable and Clean Energy',
            'Sustainable Cities and Societies',
            'Clean Water and Sanitation',
            'Climate Change and Environmental',
            'Urban Life Developments'
        ],
        required: true
    },
    educationalLevel: {
        type: String,
        enum: [
            'Primary', 
            'Prepartory',
            'Secondary'
        ],
        required: true
    },
    hasPrototype: {
        type: Boolean,
        required: true
    },
    prototypeDimensions: {
        type: String,
        default: 'No Dimensions'
    },
    abstract: {
        type: String,
        required: true
    },
    projectFile: {
        type: String,
        required: true
    },
    governorate: {
        type: String,
        required: true
    },
    schoolName: {
        type: String,
        required: true
    },
    supervisor: supervisorSchema,
    teamMembers: {
        type: Number,
        required: true
    },
    members: [membersSchema],
    accommodation: {
        type: Boolean,
        default: false
    },
    meals: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

module.exports = mongoose.model('Schools', schoolsSechma, 'schools')
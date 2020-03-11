const mongoose = require('mongoose')
const Schema = mongoose.Schema

const membersSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    birthdate: {
        type: String,
        required: true
    },
    ID: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    government: {
        type: String,
        enum: ['Aswan',
        'Luxor',
        'Qena',
        'Sohag',
        'Assuit',
        'Minia',
        'Beni-Suif'],
        required: true
    },
    university: {
        type: String,
        enum: ['Aswan University',
        'AAST Aswan',
        'Luxor University',
        'South Valley University',
        'Azhar South Valley University',
        'Sohag University',
        'Assuit University',
        'Minia University',
        'Beni-Suif University',
        'Nahda University',
        'Merit University',
        'Higher Institute of Engineering and Technology, Al- Tod'],
        required: true
    },
    faculty: {
        type: String,
        required: true
    },
    specialization: {
        type: String,
        required: true
    }
}, { _id: false })

const leaderSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    birthdate: {
        type: String,
        required: true
    },
    ID: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    government: {
        type: String,
        enum: ['Aswan',
        'Luxor',
        'Qena',
        'Sohag',
        'Assuit',
        'Minia',
        'Beni-Suif'],
        required: true
    },
    university: {
        type: String,
        enum: ['Aswan University',
        'AAST Aswan',
        'Luxor University',
        'South Valley University',
        'Azhar South Valley University',
        'Sohag University',
        'Assuit University',
        'Minia University',
        'Beni-Suif University',
        'Nahda University',
        'Merit University',
        'Higher Institute of Engineering and Technology, Al- Tod'],
        required: true
    },
    faculty: {
        type: String,
        required: true
    },
    specialization: {
        type: String,
        required: true
    }
}, { _id: false })

const hackathonSchema = new Schema({
    teamName: {
        type: String,
        required: true
    },
    leader: leaderSchema,
    teamMembers: {
        type: Number,
        required: true
    },
    members: [membersSchema]
}, { timestamps: true })

module.exports = mongoose.model('Hackathon', hackathonSchema, 'hackathon')
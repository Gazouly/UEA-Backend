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
    }
}, { _id: false })

const leaderSchema = new Schema({
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
    }
}, { _id: false })

const techSchoolsSechma = new Schema({
    teamName: {
        type: String,
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
            'Higher Institute of Engineering and Technology, Al- Tod',
            'Ain Shams University',
            'Al-Azhar University',
            'Alexandria University',
            'Cairo University',
            'Helwan University',
            'Kafr Elsheikh University',
            'Zagazig University',
            'AUC',
            'BUE',
            'GUC',
            'HTI',
            'STEM - Maddi',
            'STEM - 6 Oct',
            'STEM - Dakhalia',
            'STEM - Menofia',
            'STEM - Gharbia',
            'STEM - Alex',
            'STEM - Sharqia',
            'STEM - Ismailia',
            'STEM - Red Sea',
            'Other'],
        required: true
    },
    other: {
        type: String,
        default: 'Empty'
    },
    projectFile: {
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

module.exports = mongoose.model('MicroMouse', techSchoolsSechma, 'micromouse')
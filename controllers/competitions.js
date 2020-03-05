// Models
const Graduates = require('../models/Graduates')


// Helper functions
const validationSchemas = require('../utils/validation')
const errorHandling = require('../utils/errors')
const helper = require('../utils/helper')

exports.graduates = (req, res, next) => {
    const { title, 
            category, 
            hasPrototype, 
            prototypeDimensions, 
            abstract,
            university,
            faculty,
            supervisor,
            teamMembers,
            members,
            accommodation,
            meals } = req.body
    const projectFile = req.file
            
    const { error } = validationSchemas.gradsValidation.validate({title, 
        category, 
        hasPrototype, 
        prototypeDimensions, 
        abstract,
        // projectFile,
        university,
        faculty,
        // supervisor,
        // teamMembers,
        // members,
        accommodation,
        meals })
    
    if (error) {
        // Throwing errors
        errorHandling.validationError(error)
    }

    const project = new Graduates({ title, 
        category, 
        hasPrototype, 
        prototypeDimensions, 
        abstract,
        projectFile: projectFile.filename,
        university,
        faculty,
        supervisor,
        teamMembers,
        members,
        accommodation,
        meals })
    project.save()
        .then(() => {
            res.status(201).json({
                status: 201,
                message: 'Project registered successfully!'
            })
        })
        .catch(err => {
            errorHandling.serverError(err, next)
        })

}
// exports.undergraduates = (req, res, next) => {}
// exports.schools = (req, res, next) => {}
// exports.techschools = (req, res, next) => {}
// exports.arc6 = (req, res, next) => {}
// exports.micromouse = (req, res, next) => {}
// exports.spagetti = (req, res, next) => {}
// exports.hackathon = (req, res, next) => {}
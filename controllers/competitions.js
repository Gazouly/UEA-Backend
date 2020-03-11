// Models
const Graduates = require('../models/Graduates')
const Undergraduates = require('../models/Undergraduates')
const Schools = require('../models/Schools')
const TechSchools = require('../models/TechSchools')
const MicroMouse = require('../models/MicroMouse')
const ARC = require('../models/ARC')
const Spagetti = require('../models/Spagetti')
const Hackathon = require('../models/Hackathon')


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

    const { error } = validationSchemas.gradsValidation.validate({
        title,
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
        meals
    })

    if (error) {
        // Throwing errors
        errorHandling.validationError(error)
    }

    const project = new Graduates({
        title,
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
        meals
    })
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
exports.undergraduates = (req, res, next) => {
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

    const { error } = validationSchemas.gradsValidation.validate({
        title,
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
        meals
    })

    if (error) {
        // Throwing errors
        errorHandling.validationError(error)
    }

    const project = new Undergraduates({
        title,
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
        meals
    })
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
exports.schools = (req, res, next) => {
    const { title,
        category,
        hasPrototype,
        prototypeDimensions,
        abstract,
        governorate,
        schoolName,
        educationalLevel,
        supervisor,
        teamMembers,
        members,
        accommodation,
        meals } = req.body
    const projectFile = req.file

    const { error } = validationSchemas.schoolValidation.validate({
        title,
        category,
        hasPrototype,
        prototypeDimensions,
        abstract,
        // projectFile,
        governorate,
        schoolName,
        educationalLevel,
        // supervisor,
        // teamMembers,
        // members,
        accommodation,
        meals
    })

    if (error) {
        // Throwing errors
        errorHandling.validationError(error)
    }

    const project = new Schools({
        title,
        category,
        hasPrototype,
        prototypeDimensions,
        abstract,
        projectFile: projectFile.filename,
        governorate,
        schoolName,
        educationalLevel,
        supervisor,
        teamMembers,
        members,
        accommodation,
        meals
    })
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
exports.techschools = (req, res, next) => {
    const { title,
        category,
        hasPrototype,
        prototypeDimensions,
        abstract,
        governorate,
        schoolName,
        educationalLevel,
        supervisor,
        teamMembers,
        members,
        accommodation,
        meals } = req.body
    const projectFile = req.file

    const { error } = validationSchemas.schoolValidation.validate({
        title,
        category,
        hasPrototype,
        prototypeDimensions,
        abstract,
        // projectFile,
        governorate,
        schoolName,
        educationalLevel,
        // supervisor,
        // teamMembers,
        // members,
        accommodation,
        meals
    })

    if (error) {
        // Throwing errors
        errorHandling.validationError(error)
    }

    const project = new TechSchools({
        title,
        category,
        hasPrototype,
        prototypeDimensions,
        abstract,
        projectFile: projectFile.filename,
        governorate,
        schoolName,
        educationalLevel,
        supervisor,
        teamMembers,
        members,
        accommodation,
        meals
    })
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
exports.micromouse = (req, res, next) => {
    const { teamName,
        university,
        other,
        leader,
        teamMembers,
        members
     } = req.body
    const projectFile = req.file

    const { error } = validationSchemas.microMouseValidation.validate({
        teamName,
        university,
        other
    })

    if (error) {
        // Throwing errors
        errorHandling.validationError(error)
    }

    const project = new MicroMouse({
        teamName,
        university,
        other,
        leader,
        teamMembers,
        members,
        projectFile: projectFile.filename
    })
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

exports.arc6 = (req, res, next) => {
    const { teamName,
        university,
        leader,
        teamMembers,
        members
     } = req.body
    const projectFile = req.file

    const { error } = validationSchemas.arcValidation.validate({
        teamName,
        university
    })

    if (error) {
        // Throwing errors
        errorHandling.validationError(error)
    }

    const project = new ARC({
        teamName,
        university,
        leader,
        teamMembers,
        members,
        projectFile: projectFile ? projectFile.filename : "No File Provided"
    })
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
exports.spagetti = (req, res, next) => { 
    const { teamName,
        university,
        leader,
        teamMembers,
        members
     } = req.body
    const projectFile = req.file

    const { error } = validationSchemas.arcValidation.validate({
        teamName,
        university
    })

    if (error) {
        // Throwing errors
        errorHandling.validationError(error)
    }

    const project = new Spagetti({
        teamName,
        university,
        leader,
        teamMembers,
        members,
        projectFile: projectFile ? projectFile.filename : "No File Provided"
    })
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
exports.hackathon = (req, res, next) => { 
    const { teamName,
        leader,
        teamMembers,
        members
     } = req.body
    const projectFile = req.file

    const { error } = validationSchemas.hackathonValidation.validate({
        teamName
    })

    if (error) {
        // Throwing errors
        errorHandling.validationError(error)
    }

    const project = new Hackathon({
        teamName,
        leader,
        teamMembers,
        members
    })
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
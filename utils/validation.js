const Joi = require('@hapi/joi')

exports.gradsValidation = Joi.object({
        title: Joi.string()
                .min(3)
                .max(500)
                .required(),
        category: Joi.string()
                .required(),
        hasPrototype: Joi.bool()
                .required(),
        prototypeDimensions: Joi.string(),
        abstract: Joi.string()
                .required(),
        university: Joi.string()
                .required(),
        faculty: Joi.string()
                .required(),
        accommodation: Joi.bool()
                .required(),
        meals: Joi.bool()
                .required()

})
exports.schoolValidation = Joi.object({
        title: Joi.string()
                .min(3)
                .max(500)
                .required(),
        category: Joi.string()
                .required(),
        hasPrototype: Joi.bool()
                .required(),
        prototypeDimensions: Joi.string(),
        abstract: Joi.string()
                .required(),
        schoolName: Joi.string()
                .required(),
        educationalLevel: Joi.string()
                .required(),
        governorate: Joi.string()
                .required(),
        accommodation: Joi.bool()
                .required(),
        meals: Joi.bool()
                .required()

})
exports.microMouseValidation = Joi.object({
        teamName: Joi.string()
                .min(3)
                .max(500)
                .required(),
        university: Joi.string()
                .required(),
        other: Joi.string()
                .required()

})
exports.arcValidation = Joi.object({
        teamName: Joi.string()
                .min(3)
                .max(500)
                .required(),
        university: Joi.string()
                .required()

})
exports.hackathonValidation = Joi.object({
        teamName: Joi.string()
                .min(3)
                .max(500)
                .required()

})
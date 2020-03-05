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
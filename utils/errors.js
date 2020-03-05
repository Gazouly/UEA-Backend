exports.validationError = (error) => {
    error.statusCode = 422
    throw error;
}
exports.notFoundError = (error) => {
    error.statusCode = 404
    throw error;
}

exports.authError = (error) => {
    error.statusCode = 401
    throw error;
}

exports.serverError = (err, next) => {
    if (!err.statusCode)
        err.statusCode = 500
    next(err)
}
module.exports = (error, req, res, next) => {
    const status = error.statusCode || 500;
    const message = error.message;
    const errors = error.errors;
    res.status(status).json({
        status,
        message,
        errors
    })
}
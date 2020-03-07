const path = require('path')

const multer = require('multer')

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (req.path === '/graduates')
            cb(null, path.join(__dirname, '..', `uploads/graduates`))
        if (req.path === '/undergraduates')
            cb(null, path.join(__dirname, '..', `uploads/undergraduates`))
        if (req.path === '/schools')
            cb(null, path.join(__dirname, '..', `uploads/schools`))
        if (req.path === '/techschools')
            cb(null, path.join(__dirname, '..', `uploads/techschools`))
        if (req.path === '/micromouse')
            cb(null, path.join(__dirname, '..', `uploads/micromouse`))
        if (req.path === '/arc6')
            cb(null, path.join(__dirname, '..', `uploads/arc6`))
        if (req.path === '/spagetti')
            cb(null, path.join(__dirname, '..', `uploads/spagetti`))
        if (req.path === '/hackathon')
            cb(null, path.join(__dirname, '..', `uploads/hackathon`))
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString().replace(/:/g, '') + '-' + file.originalname.replace(/\s/g, ''))
    }
})
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'application/msword' || 
        file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || 
        file.mimetype === 'application/pdf' || 
        file.mimetype === 'application/vnd.ms-powerpoint' || 
        file.mimetype === 'application/vnd.openxmlformats-officedocument.presentationml.presentation')
        cb(null, true)
    else
        cb(null, false)
}
module.exports = multer({ fileFilter: fileFilter, storage: fileStorage }).single('projectFile')
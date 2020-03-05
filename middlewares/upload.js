const path = require('path')

const multer = require('multer')

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '..', `uploads`))
    },
    filename: (req, file, cb) => {
        cb(null, Math.ceil(Math.random()*1157883) + '-' + file.originalname.replace(/\s/g, ''))
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
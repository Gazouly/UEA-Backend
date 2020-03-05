const fs = require('fs')
const path = require('path')


exports.clearImages = files => {
    let filePath;
    for (let file of files) {
        filePath = path.join(__dirname, '..', file.path)
        fs.unlink(filePath, err => {
            if (err)
                console.log('Cannot delete uploaded images, ', err)
        })
    }
}


exports.clearImage = filePath => {
    filePath = path.join(__dirname, '..', filePath)
    fs.unlink(filePath, err => {
        if (err)
        console.log('Cannot delete the image, ', err)
    })
}

exports.fixPath = (imagePath) => {
    const imgName = imagePath.split('\\')
    return `images/${imgName[1]}`
}
const sharp = require('sharp')
const uuidv4 = require('uuid/v4')
const path = require('path')
const fs = require('fs')

class Compression {
    constructor(folder) {
        this.folder = folder
    }
    async save(buffer) {
        let filename, filepath

        await sharp(buffer)
            .jpeg({ quality: 80 })
            .metadata()
            .then((metadata) => {
                filename = Compression.filename(metadata.format)
                filepath = this.filepath(filename)

                return sharp(buffer)
                    .resize(Math.round(metadata.width / 4))
                    .toFormat('jpeg')
                    .toFile(filepath)
        })
        return filename
    }
    static filename(mimetype) {
        return `${uuidv4()}.jpeg`
    }
    filepath(filename) {
        return path.resolve(`${this.folder}/${filename}`)
    }
}
module.exports = Compression

const sharp = require('sharp')
const uuidv4 = require('uuid/v4')
const path = require('path')
const fs = require('fs')

class CompressionAd {
    constructor(folder) {
        this.folder = folder
    }
    async save(buffer) {
        let filename, filepath

        await sharp(buffer)
            .metadata()
            .then((metadata) => {
                filename = CompressionAd.filename(metadata.format)
                filepath = this.filepath(filename)

                if (metadata.format === 'gif') {
                    fs.writeFile(filepath, buffer, 'binary', function (err) {
                        if (err) throw err
                    })

                } else {
                    return sharp(buffer)
                        .resize(Math.round(metadata.width / 2))
                        .toFormat('jpeg')
                        .toFile(filepath)
                }
            })

        return filename
    }
    static filename(mimetype) {
        if (mimetype === 'gif')
            return `${uuidv4()}.gif`
        else
            return `${uuidv4()}.jpeg`
    }
    filepath(filename) {
        return path.resolve(`${this.folder}/${filename}`)
    }
}
module.exports = CompressionAd

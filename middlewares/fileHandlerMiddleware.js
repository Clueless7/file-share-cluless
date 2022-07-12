const multer = require('multer')

const fileHandler = (req, res, next) => {
  multer({ dest: 'uploads' }).single('file')(req, res, next)
}

module.exports = fileHandler

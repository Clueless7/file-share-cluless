const bcrypt = require('bcrypt')
const File = require('../models/fileModel')

const handleDownload = async (req, res) => {
  try {
    const file = await File.findById(req.params.id)

    if (file.password != null) {
      if (req.body.password == null) {
        res.render('password')
        return
      }

      if (!(await bcrypt.compare(req.body.password, file.password))) {
        res.render('password', { error: true })
        return
      }
    }

    file.downloadCount++
    await file.save()

    res.download(file.path, file.originalName)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  handleDownload,
}

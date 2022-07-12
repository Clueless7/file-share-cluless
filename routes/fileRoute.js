const express = require('express')
const router = express.Router()

const { handleDownload } = require('../controllers/fileController')

router.route('/:id').get(handleDownload).post(handleDownload)

module.exports = router

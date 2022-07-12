require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()

const uploadRoute = require('./routes/uploadRoute')
const fileRoute = require('./routes/fileRoute')
const fileHandler = require('./middlewares/fileHandlerMiddleware')

app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs')

mongoose.connect(process.env.MONGO_URI, () => {
  console.log('Connected to database')
})

app.get('/', (req, res) => {
  res.render('index')
})

app.use('/upload', fileHandler, uploadRoute)
app.use('/file', fileRoute)

app.listen(process.env.PORT || 3000, () => {
  console.log('http://localhost:3000')
})

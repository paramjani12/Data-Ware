const express = require('express')
const connectDB = require('./config/db')
const cors = require('cors')
const userRouter = require('./routes/userRouter')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')

const app = express()

app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use('/api/v1/users', userRouter)

app.use('*', (req, res) => {
  res.status(404).json({ message: 'Route not found' })
})

connectDB()

app.listen(6565, () => {
  console.log('Hey Param, Your server is up and runningf!')
})

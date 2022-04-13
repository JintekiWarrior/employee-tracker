const express = require('express')

const db = require('./db/connection')

// routes
const apiRoutes = require('./routes')

const PORT = process.env.PORT || 3001
const app = express()

// express middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// api routes
app.use(apiRoutes)

// default response for requests not found
app.use((req, res) => {
  res.status(404).end()
})

db.connect(err => {
  if (err) throw err
  console.log('Connected to database')
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  }) 
})


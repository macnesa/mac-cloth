if (process.env.NODE_ENV !== 'production') require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const cors = require('cors')
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// app.use(require('./routes'))





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app

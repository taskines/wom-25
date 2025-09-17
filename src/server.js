const express = require('express')
const PORT = process.env.PORT || 8080
require('dotenv').config()

const app = express()


console.log(`Node.js ${process.version}`)

app.use(express.json())

app.get('/', async (req, res) => {
  res.json({msg: "Lektionsexempel!"})
})

const notesRouter = require('./routes/notes')
app.use('/notes', notesRouter)


app.listen(PORT, () => {
    try {
        console.log(`Running on http://localhost:${PORT}`)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
    
})
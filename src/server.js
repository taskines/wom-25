const express = require('express')
const PORT = process.env.PORT || 8080
const cors =require('cors')

require('dotenv').config()



const app = express()

app.use(cors())  //Tillåt request från alla origins


console.log(`Node.js ${process.version}`)

app.use(express.json())

app.get('/', async (req, res) => {
  res.json({msg: "Lektionsexempel!"})
})

const notesRouter = require('./routes/notes')
app.use('/notes', notesRouter)

const usersRouter = require('./routes/users')
app.use('/users', usersRouter)


app.listen(PORT, () => {
    try {
        console.log(`Running on http://localhost:${PORT}`)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
    
})
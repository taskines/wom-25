const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send("Notes!")
})

router.post('/', (req, res) => {
    res.send({
      body:   req.body 
    })
})

router.patch('/:id',(req, res) =>{
    res.send({
      id:  req.params.id,
      body: req.body
    })
}) 

router.delete('/:id',(req, res) =>{
    res.send({id:req.params.id})
}) 

module.exports = router
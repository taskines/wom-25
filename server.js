//console.log("Hello Rubiina mm!")

const express= require('express')
const app=express()
const fetchProduct=require("./middleware/fetch-products")
const logRequest=require("./middleware/log-request")
const PORT=3000

//Fortsätta till följande med next 
//middleware




// Ena sättet att använda middelware

app.use(logRequest)




app.get('/', (req, res) => {
  res.send('Hello World!')

})

 // Andra sättet att använda middleware 
app.get('/shop', fetchProduct, (req, res) => {
  res.send(`välkommen till shoppen vi säljer ${req.product}`)
})
app.get('/api', (req, res) => {
  res.json({greeting:"Hello!"})
})








// Code Challenge


app.get('/hello/:name', (req, res) => {
  res.send(`Hej ${req.params.name}`);
});

app.get('/weekdays/:days', (req, res) => {
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
res.send(days[req.params.days-1]); 
})


app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})
const express = require('express')
const mongoose = require('mongoose')
const app = express()


app.get('/', (req, res) => {
  res.send('Hello Students - Loyola IT ')
})

app.listen(3000, ()=>{
    console.log("This server is running on 3000");
})

mongoose.connect("mongodb+srv://dineshjr107:bWSd7lBOZPLf8Tho@cluster0.li9njj4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    console.log("Database Connected");  
}).catch(() => {
    console.log("Connection failed");
})

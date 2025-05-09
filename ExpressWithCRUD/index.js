const express = require('express')
const mongoose = require('mongoose')
const app = express()


const port = 3000;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
  })

  app.get('/', (req, res) => {
    res.send('Hello Students from Loyola! from Node express API')
  })


  mongoose.connect("mongodb+srv://dineshdinesh1234321:vWsdCmUnmBPV1KxA@curddbloyola.q6ee6rb.mongodb.net/?retryWrites=true&w=majority&appName=CurdDbLoyola").then(() => {
    console.log("Connected to db");
  }).catch(() => {
    console.log("Connection failed");
    
  })

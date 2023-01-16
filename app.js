const express = require('express')
const app = express();
const mongoose = require('mongoose')
app.use(express.json())
require('dotenv').config()
const PORT = process.env.PORT || 8080

mongoose.connect(process.env.URL,{
    useNewUrlParser: true,
    connectTimeoutMS: 50000,
    useUnifiedTopology: true
}).then(() =>{
    console.log("Database connected")
}).catch((err)=>{
    console.log(err)
})

const Categories = require('./route/categories')
app.use('/Admin',Categories)


app.listen(PORT,() => {
    console.log(`Server is running on ${PORT}`)
})
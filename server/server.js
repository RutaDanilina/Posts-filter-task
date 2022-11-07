const express = require("express")
const app = express()
const cors = require("cors")
const mainRouter = require('./Routes/router')

const URL = require('./db')


const mongoose = require('mongoose')

mongoose.connect(URL.URL).then(()=> {
    console.log('Connected to MongoDB');
}).catch(e=> {
    console.log(e);
    console.log('Connection error');
})



app.use(cors())
app.use(express.json())
app.listen(3000)
app.use('/', mainRouter)


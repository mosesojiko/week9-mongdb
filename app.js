const express = require('express');
const dotenv = require('dotenv');
const app = express();
const userRoute = require('./routes/userRoute');
const mongoose = require('mongoose')

dotenv.config()
app.use(express.json())

app.get('/', (req, res)=>{
    res.send('Welcome to my api')
})

app.use('/api/user', userRoute)


app.listen(process.env.PORT, ()=>{
    console.log(`Server listening on ${process.env.PORT}`)
})
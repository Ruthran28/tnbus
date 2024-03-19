const express=require('express')

const mongoose=require('mongoose')
const cors=require("cors")

const app=express()
const rout=require('./router')

app.use(express.json())
app.use(cors())
app.use('/api',rout) //http://localhost:2718/api/

mongoose.connect('mongodb+srv://sjhruthran28:063uOKtQfsYw2M4k@cluster0.5z1rbiy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
    app.listen(2718)
    console.log('db connect')
})


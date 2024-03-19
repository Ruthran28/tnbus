const express=require('express')

const route=express.Router();
const con=require('./userCon')

route.post('/addbus',con.adddata)
route.get('/get',con.getStatus)
route.post('/check',con.checkbus)

module.exports=route
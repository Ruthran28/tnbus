const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    Busname:String,
    BusNumber:String,
    ToArea:String,
    busstatus:{
        type:Boolean,
        default:false
    },
    buspos:String,
   
})

module.exports=mongoose.model('businfo',userSchema)


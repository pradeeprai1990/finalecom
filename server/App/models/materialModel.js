let mongoose=require("mongoose")
let materialSchema= new mongoose.Schema({
    materialName:{
        type:String,
        unique:true,
        required:true,
        minLength:2,
        maxLength:20,
       
    },
   
    materialOrder:Number,
    materialStatus:Boolean
})

let materialModel=mongoose.model("material",materialSchema)
module.exports={materialModel}

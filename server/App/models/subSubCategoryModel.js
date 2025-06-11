let mongoose=require("mongoose")
let subSubcategorySchema= new mongoose.Schema({
    subSubcategoryName:{
        type:String,
        unique:true,
        required:true,
        minLength:2,
        maxLength:20,
       
    },                                                             //68349b674839b8e8f61e41f1                 
    parentCategory: {type: mongoose.Types.ObjectId, ref: "category"}, //68374556e568bbcaa6ba031b,
    subCategory: {type: mongoose.Types.ObjectId, ref: "subcategory"}, //68374556e568bbcaa6ba031b
    subSubcategoryImage:String,
    subSubcategoryOrder:Number,
    subSubcategoryStatus:Boolean
})

let subSubcategoryModel=mongoose.model("subsubcategory",subSubcategorySchema)
module.exports={subSubcategoryModel}

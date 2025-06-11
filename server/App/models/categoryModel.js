let mongoose=require("mongoose")
let categorySchema= new mongoose.Schema({
    categoryName:{
        type:String,
        unique:true,
        required:true,
        minLength:2,
        maxLength:20,
       
    },
    categoryImage:String,
    categoryOrder:Number,
    categoryStatus:Boolean
})

// Virtual field to get all subcategories
categorySchema.virtual('subcategory', {
    ref: 'subcategory',
    localField: '_id',
    foreignField: 'parentCategory'
})

let categoryModel=mongoose.model("category",categorySchema)
module.exports={categoryModel}

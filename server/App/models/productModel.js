let mongoose=require("mongoose")
let productSchema= new mongoose.Schema({
    productName:{
        type:String,
        unique:true,
        required:true,
        minLength:2,
        maxLength:20,
       
    },                                                             //68349b674839b8e8f61e41f1                 
    parentCategory: {type: mongoose.Types.ObjectId, ref: "category"}, //68374556e568bbcaa6ba031b
    subCategory: {type: mongoose.Types.ObjectId, ref: "subcategory"},
    subSubCategory: {type: mongoose.Types.ObjectId, ref: "subsubcategory"},
    productMeterial:[ {type: mongoose.Types.ObjectId, ref: "material"}],
    productColor:[ {type: mongoose.Types.ObjectId, ref: "color"}],
    productType:{
        type:Number,
        enum: ['1', '2','3'],  //1 Featured,2 New Arrival,3 OnSale

    },
    productbestSelling:Boolean,
    productTopRated:Boolean,
    productUpsell:Boolean,
    productActualPrice:Number,
    productsalePrice:Number,
    productStocks:Number,
    productImage:String,
    productBackimage:String,
    productGallery:Array,
    productDescription:String,
    productOrder:Number,
    productStatus:Boolean
})

let productModel=mongoose.model("product",productSchema)
module.exports={productModel}
 

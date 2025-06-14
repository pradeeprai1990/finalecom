const { categoryModel } = require("../../models/categoryModel")
const { colorModel } = require("../../models/colorModel")
const { materialModel } = require("../../models/materialModel")
const { productModel } = require("../../models/productModel")
const { subcategoryModel } = require("../../models/subCategoryModel")
const { subSubcategoryModel } = require("../../models/subSubCategoryModel")


let productInsert =async (req, res) => {
   
    let obj = {...req.body}
    console.log(req.files)
    if (req.files) {
        if (req.files.productImage) {
            obj['productImage'] = req.files.productImage[0].filename //'1749921370810-1.jpg'
        }

        if (req.files.productBackimage) {
            obj['productBackimage'] = req.files.productBackimage[0].filename //'1749921370817-1.jpg'
        }
        if (req.files.productGallery) {
            obj['productGallery'] = req.files.productGallery.map((items)=>items.filename)
            //[ "1749921370822-1.jpg","1749921370825-2.jpg"]
        }
        

    }

    let product=await productModel.insertOne(obj)
    console.log(obj)
    obj={
        status:1,
        mgs:"Product Save",
       
        product
    }
    res.send(obj)
    


}

let parentCategory = async (req, res) => {
    let data = await categoryModel.find().select("categoryName")
    let obj = {
        status: 1,
        data


    }
    res.send(obj)
}

let subCategory = async (req, res) => {
    let { parentid } = req.params; ///68374556e568bbcaa6ba031b
    let data = await subcategoryModel.find({ parentCategory: parentid }).select("subcategoryName")
    let obj = {
        status: 1,
        data


    }
    res.send(obj)
}

let subSubCategory = async (req, res) => {
    let { parentid } = req.params; ///68374556e568bbcaa6ba031b
    let data = await subSubcategoryModel.find({ subCategory: parentid }).select("subSubcategoryName")
    let obj = {
        status: 1,
        data


    }
    res.send(obj)
}

let getColor = async (req, res) => {
    let data = await colorModel.find({ colorStatus: true }).select("colorName")
    let obj = {
        status: 1,
        data


    }
    res.send(obj)
}
let getMeterial = async (req, res) => {
    let data = await materialModel.find({ materialStatus: true }).select("materialName")
    let obj = {
        status: 1,
        data


    }
    res.send(obj)
}
module.exports = { productInsert, parentCategory, subCategory, getColor, getMeterial, subSubCategory }
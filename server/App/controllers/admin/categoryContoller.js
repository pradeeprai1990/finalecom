const { categoryModel } = require("../../models/categoryModel")

let categoryInsert=async (req,res)=>{

    let {categoryName,categoryOrder}=req.body
    let obj={
        categoryName,
        categoryOrder
    }

    if(req.file){
        if(req.file.filename){
            obj['categoryImage']=req.file.filename
        }
    }
    try{
       
        let categoryRes=await categoryModel.insertOne(obj)
        obj={
            status:1,
            mgs:"category Save",
            categoryRes
        }
        res.send(obj)
        
    }
    catch(error){
        obj={
            status:0,
            mgs:"category name already exist...",
            error
        }
        res.send(obj)
    }

  
}

module.exports={categoryInsert}
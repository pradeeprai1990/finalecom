const { materialModel } = require("../../models/materialModel")

let materialInsert=async (req,res)=>{

    let {materialName,materialOrder}=req.body
    let obj
    try{
        let inserObj={
            materialName,
            materialStatus:true,
            materialOrder
        }
        let materialRes=await materialModel.insertOne(inserObj)
        obj={
            status:1,
            mgs:"material Save",
            materialRes
        }
        res.send(obj)
        
    }
    catch(error){
        obj={
            status:0,
            mgs:"Material name already exist...",
            error
        }
        res.send(obj)
    }
  
    
   
}

let materialView=async (req,res)=>{
    let data=await materialModel.find()
    let obj={
        status:1,
        mgs:"material View",
        data
    }
    res.send(obj)
}
let materialDelete=async (req,res)=>{
    let {id}=req.params;
    let delRes=await materialModel.deleteOne({_id:id})
    let obj={
        status:1,
        mgs:"material Delete",
        delRes
    }
    res.send(obj)
}

let materialmultiDelete=async (req,res)=>{
    let {ids}=req.body;

    let delRes=await materialModel.deleteMany({_id:ids})
    let obj={
        status:1,
        mgs:"material Multi Delete",
        delRes
       
    }
    res.send(obj)

}

let updatematerial=async (req,res)=>{
    let {id}=req.params;
    let {materialName,materialCode,materialStatus,materialOrder}=req.body

    let updObj={
        materialName,
        materialOrder
    }

    let updRes=await materialModel.updateOne({_id:id},{$set:updObj})

    let obj={
        status:1,
        mgs:"material Updated",
        updRes
       
    }
    res.send(obj)

}

let singlematerialView=async (req,res)=>{
    let {id}=req.params
    let data=await materialModel.findOne({_id:id})
    let obj={
        status:1,
        mgs:"material View",
        data
    }
    res.send(obj)
}

module.exports={materialInsert,materialView,materialDelete,materialmultiDelete,updatematerial,singlematerialView}
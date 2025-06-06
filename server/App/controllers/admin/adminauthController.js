const { adminModel } = require("../../models/adminModel")


let adminLogin=async (req,res)=>{
    console.log(req.body)
    let checkAdmin= await adminModel.findOne(req.body)
    let resObj;
    if(checkAdmin)  {
        resObj={
            status:1,
            adminID:checkAdmin._id,
            msg:"Login Success"
        }
    }
    else{
        resObj={
            status:0,
            msg:"InValid UserName or Password!..."
        }
    }
    res.send(resObj)
}

module.exports={adminLogin}
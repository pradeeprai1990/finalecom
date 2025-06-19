const bcrypt = require('bcrypt');
const { userModel } = require('../../models/userModels');
let jwt = require('jsonwebtoken');
const saltRounds = 10;
let register=async (req,res)=>{
    let {email,name,phone,password}=req.body;

    const hashPassword = bcrypt.hashSync(password, saltRounds);
    console.log(hashPassword)
    let resObj
    try{
        let insertObj={
            userName:name,
            userEmail:email,
            userPassword:hashPassword,
            userPhone:phone
        }
        let user=await userModel.insertOne(insertObj)
        resObj={
            status:1,
            msg:"user created",
            user
        }
    }
    catch(error){
        resObj={
            status:0,
            msg:"Email Id Already Exists..."
        }
    }
   

    res.send(resObj)
   
}


let login=async (req,res)=>{
    let {email,password}=req.body;
    let myRes
    //Check Email
    let checkEmail=await userModel.findOne({userEmail:email})
    if(checkEmail){
        let dbPassword=checkEmail.userPassword

        if(bcrypt.compareSync(password, dbPassword)){

            let user={
                userName:checkEmail.userName,
                id:checkEmail._id
            }
            let token = jwt.sign(user,process.env.TOKENKEY);
            myRes={
                status:1,
                msg:"Login Success",
                user,
                token
            }
        } 
        else{
            myRes={
                status:0,
                msg:"Invalid Password"
            }
        }
       
    }
    else{
        myRes={
            status:0,
            msg:"InValid Email Id"
        }
    }
    res.send(myRes)
}
module.exports={register,login}
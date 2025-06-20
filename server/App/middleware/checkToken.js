let jwt = require('jsonwebtoken');
let checkToken=(req,res,next)=>{
    // console.log(req.headers.authorization)

    try{
        let token=req.headers.authorization.split(" ")[1]
        let decoded = jwt.verify(token, process.env.TOKENKEY);
        req.body.userId=decoded.id
        next()
    }
   catch(error){
        console.log(error)
   }
    
    res.send("Token Check Logic")
}

module.exports={checkToken}
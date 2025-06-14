let express=require("express")
const { userauthRoutes } = require("./userAuthRoutes")
let webRoutes=express.Router()

webRoutes.use('/user',userauthRoutes)  // http://localhost:8000/web/user

module.exports={webRoutes}
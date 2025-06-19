let express=require("express");
const { register, login } = require("../../controllers/web/userAuthController");
const multer = require("multer");

let userauthRoutes=express.Router();
let uploads=multer()
userauthRoutes.post('/regsiter',uploads.none() ,register)
userauthRoutes.post('/login',uploads.none() ,login)

module.exports={userauthRoutes}
let express=require("express");
const { register } = require("../../controllers/web/userAuthController");

let userauthRoutes=express.Router();

userauthRoutes.post('/regsiter',register)

module.exports={userauthRoutes}
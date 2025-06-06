let express=require("express");
const { adminLogin } = require("../../controllers/admin/adminauthController");


let adminauthRoutes=express.Router();

adminauthRoutes.post('/login',adminLogin)


module.exports={adminauthRoutes}
let express=require("express");
const { adminLogin, forgotSendOTP,  resetPassword, verifyOTP, changePassword } = require("../../controllers/admin/adminauthController");


let adminauthRoutes=express.Router();

adminauthRoutes.post('/login',adminLogin)

adminauthRoutes.post('/send-otp',forgotSendOTP) //

adminauthRoutes.post('/verify-otp',verifyOTP)

adminauthRoutes.post('/reset-password',resetPassword)

//After Login
adminauthRoutes.post('/change-password',changePassword)


module.exports={adminauthRoutes}
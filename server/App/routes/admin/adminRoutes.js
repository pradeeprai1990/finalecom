
let express=require("express")
const { colorRoutes } = require("./colorRoutes")
const { materialRoutes } = require("./materialRoutes")
const { categoryRoutes } = require("./categoryRoutes")
const { subcategoryRoutes } = require("./subcategoryRoutes")
const { adminauthRoutes } = require("./adminauthRoute")

let adminRoutes=express.Router()
adminRoutes.use("/auth",adminauthRoutes)

adminRoutes.use("/color",colorRoutes) //http://localhost:8000/admin/color/
adminRoutes.use("/material",materialRoutes) //http://localhost:8000/admin/color/
adminRoutes.use("/category",categoryRoutes) //http://localhost:8000/admin/category/
adminRoutes.use("/subcategory",subcategoryRoutes) //http://localhost:8000/admin/subcategory/parentcategory

module.exports={adminRoutes}

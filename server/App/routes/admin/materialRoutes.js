
let express=require("express");
const { materialInsert, materialView,  materialmultiDelete, changeStatus } = require("../../controllers/admin/materialController");
let materialRoutes=express.Router();


materialRoutes.post("/insert",materialInsert)
http://localhost:8000/admin/material/view
materialRoutes.get("/view",materialView)

materialRoutes.post("/delete",materialmultiDelete)
materialRoutes.post("/change-status",changeStatus)

module.exports={materialRoutes}

let express=require("express");
const { materialInsert, materialView, materialDelete } = require("../../controllers/admin/materialController");
let materialRoutes=express.Router();


materialRoutes.post("/insert",materialInsert)
http://localhost:8000/admin/material/view
materialRoutes.get("/view",materialView)

materialRoutes.delete("/delete/:id",materialDelete)


module.exports={materialRoutes}
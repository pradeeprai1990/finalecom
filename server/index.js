let express=require("express");
let mongoose=require("mongoose")
const { adminRoutes } = require("./App/routes/admin/adminRoutes");
let app=express();
let cors=require("cors")
app.use(cors())
app.use(express.json())
require("dotenv").config()

app.use("/admin",adminRoutes) //http://localhost:8000/admin

app.use("/uploads/category",express.static("uploads/category"))
//Folder Allow Path Frontend  


mongoose.connect(`mongodb://127.0.0.1:27017/ecomfurniture`)
.then((res)=>{
    console.log("DB Connect")
    app.listen(process.env.PORT)

})
//http://localhost:8000
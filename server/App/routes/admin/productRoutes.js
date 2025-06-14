let express=require("express");
const multer  = require('multer');
const { parentCategory, subCategory, getColor, getMeterial, subSubCategory, productInsert } = require("../../controllers/admin/productController");
// const upload = multer({ dest: 'uploads/product' })
let storage = multer.diskStorage({
    destination:function(req,file,cb){
        return cb(null,"uploads/product")
    },
    filename:function(req,file,cb){
        cb(null,`${Date.now()}-${file.originalname}`) //6515655515pradeep.jpg
                                                    ////6515655519pradeep.jpg
    }
})
const upload = multer({ storage: storage })

let myUplaod=upload.fields(
    [
      {
        name:'productImage',
        maxCount:1
      },
      {
        name:'productBackimage',
        maxCount:1
      },
      {
        name:'productGallery',
        maxCount:10,
      }  
    ]
)



let productRoutes=express.Router();
productRoutes.post('/insert',myUplaod ,productInsert)

productRoutes.get('/parent-category',parentCategory)
productRoutes.get('/sub-category/:parentid',subCategory)

productRoutes.get('/sub-sub-category/:parentid',subSubCategory)
productRoutes.get('/product-color',getColor)
productRoutes.get('/product-meterial',getMeterial)

module.exports={productRoutes}
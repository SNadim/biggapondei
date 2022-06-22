const router = require("express").Router();
const {checkLogin} = require("../middlewares/common/checkLogin");
const {data} = require("../data");
// create
router.post("/",checkLogin,async (req,res)=>{
    res.status(200).json(req.body);
    Videos.create(db)
});

// get all products
router.get("/",(req,res)=>{
  
   //console.log(req.query);
    res.status(200).json(data);
});

// update
router.put("/:id",checkLogin,(req,res)=>{
    const product = {
        ...req.body,
        id: req.params.id
    }
    res.status(200).json(product);
});

// delete

router.delete("/:id",checkLogin,(req,res)=>{

});

// get a product
router.get("/:id",(req,res)=>{
    res.status(200).json(data[0]);
});

// get all products

router.get("/",checkLogin,(req,res)=>{

});

module.exports = router;
const express = require('express');

const router= express.Router();

router.use('/',(req,res,next)=>{
        console.log("Api call recieved");
        next();
})


router.get('/',(req,res,next)=>{
    res.send("get yawa from prodfdsfggducts"  )
    next();
})

router.use('/',(req,res)=>{
    console.log("Api call ended");
   
})

 
router.get('/get-products/:id',(req,res)=>{
    res.send("get resquest from yawa:"  + req.params.id)
})

//handle url error 
router.get('*',(req,res)=>{
     res.send("url not found")
})

module.exports = router;
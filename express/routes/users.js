const express = require('express');

const router= express.Router();

router.get('/',(req,res)=>{
    res.send("get resquest for userss")
})

router.get('/get-use',(req,res)=>{
    res.send("get resquest from user" )
})




module.exports = router;
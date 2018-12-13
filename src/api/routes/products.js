const express = require('express');
const router = express.Router()

router.get('/',(req,res,next)=>{
   res.status(200).json({
    message:'get ok done'
   });
});
router.post('/',(req,res,next)=>{
    res.status(200).json({
     message:'post ok done'
    });
 });
 router.get('/:productId',(req,res,next)=>{
    const id =req.params.productId;
    if(id === '123'){
        res.status(200).json({
            message:'Zero is Coming'
        })
    }
    else{
        req.status(200).json({
            message:'KGF loader'
        })
    }
 });
module.exports = router;
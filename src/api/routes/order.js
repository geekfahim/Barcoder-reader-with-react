const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'order getting!'
    });
});
router.post('/',(req,res,next)=>{
    res.status(200).json({
        message:'order posting!'
    });
});

router.get('/:oderId',(req,res,next)=>{
    res.status(200).json({
        message:'order getting!',
        id: req.params.orderId
    });
});
module.exports = router;
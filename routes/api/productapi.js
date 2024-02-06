


const express = require('express');
const { isLoggedIn } = require('../../middleware');
const User = require('../../models/User');
const router = express.Router();  // mini application

router.post('/products/:productId/like', isLoggedIn , async(req,res)=>{
    try{
        let {productId} = req.params;
        let user = req.user;
        let isLiked = user.wishlist.includes(productId);
        // console.log(isLiked);
        if (isLiked) {
            await User.findByIdAndUpdate(req.user._id , {$pull: {wishlist : productId }})
        } else {
            await User.findByIdAndUpdate(req.user._id , {$addToSet: {wishlist : productId }})
        }
    }
    catch(e){
        res.status(500).render('error', {err : e.message})
    }

})

module.exports = router;











var express=require('express');
var router=express.Router();

//Home page
router.get('/',function(req,res){
    res.render('index');
})

//Home page
router.get('/login',function(req,res){
    res.render('login');
})

module.exports = router;
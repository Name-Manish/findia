const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    res.render("./tabs/home")
})

router.get("/home",(req,res)=>{
    res.render("./tabs/home")
})
router.get("/SignIn",(req,res)=>{
    res.render("./tabs/AuthPage/signin")
})

router.get("/SignUp",(req,res)=>{
    res.render("./tabs/AuthPage/signup");
})
router.get("/create",(req,res)=>{
    res.render("./tabs/create");
})

module.exports = router;
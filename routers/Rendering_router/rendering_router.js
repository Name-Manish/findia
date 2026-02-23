const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    res.render("home");
})
router.get("/home",(req,res)=>{
    res.render("home");
})
router.get("/categories",(req,res)=>{
    res.render("categories");
})
router.get("/practice",(req,res)=>{
    res.render("practice");
})
router.get("/create",(req,res)=>{
    res.render("create");
})
router.get("/login",(req,res)=>{
    res.render("login");
})




module.exports = router;
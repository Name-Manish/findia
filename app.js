const express = require("express");
const path = require("path");
const port = require("dotenv");
const app = express();


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
//all middleware here
app.use(express.json());
app.use(express.static(path.join("public",__dirname)));
app.use(express.urlencoded({extended:true}));



app.get("/",(req,res)=>{
    res.render("home");
})


port.config();
const PORT = process.env.PORT || 4000;
app.listen(PORT,(err)=>{
    console.log(`The server is running in this port http://localhost:${PORT}`);
})

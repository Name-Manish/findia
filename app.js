const express = require("express");
const path = require("path");
const Rendering_router = require("./routers/Rendering_router/rendering_router");
const port = require("dotenv");
const app = express();


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

//all middleware here

app.use(express.json());
app.use(express.static(path.join(__dirname,"public")));
// app.use(express.static(path.join(__dirname,"routers")));
app.use(express.urlencoded({extended:true}));


app.use("/",Rendering_router);




port.config();
const PORT = process.env.PORT || 4000;
app.listen(PORT,(err)=>{
    console.log(`The server is running in this port http://localhost:${PORT}`);
})

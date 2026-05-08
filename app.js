const express = require("express");
const page = require("./routes/pages");
const path = require("path");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

//all middleware here

app.use(express.json());
app.use(express.static(path.join(__dirname,"public")));
// app.use(express.static(path.join(__dirname,"routers")));
app.use(express.urlencoded({extended:true}));

app.use("/",page);




const PORT = process.env.PORT || 4000;
app.listen(PORT,(err)=>{
    console.log(`The server is running in this port http://localhost:${PORT}/findiaUI`);
})

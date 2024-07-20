const express=require("express");
const app=express();
const db=require("./db.js");
const bodyParser=require("body-parser");
app.use(bodyParser.json());//store the data in req.body in json form


app.get('/',(req,res)=>{
    res.send("hello! you are welcome");
})

const { error, log } = require("console");

//Import the router files
const personRoutes=require("./Routes/personRoutes.js");
const menuRoutes=require("./Routes/menuRoutes.js");

//Use the routes
app.use('/person',personRoutes);
app.use('/menu',menuRoutes);



app.listen(8000,()=>{
    console.log("server started  at port 8000");
})
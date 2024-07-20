const mongoose=require("mongoose");
require('dotenv').config();

//Define the MongoDB connection URL for local database from .env
// const mongoURL=process.env.mongoDB_URL_LOCAL;

//Define the MongoDB connection URL to host database form .env
const mongoURL=process.env.MongoDB_URL;


//Set up mongoDB connection 
mongoose.connect(mongoURL,{
    // useNewUrlParser:true,
    // useUnifiedTopology:true
});

//Get the default connection 
const db=mongoose.connection;

//Define event listener foe the database connection 
db.on('connected',()=>{
    console.log("Connected to the mongodb server");
})
db.on('error',(err)=>{
    console.log("Mongodb error",err);
})
db.on('disconnected',()=>{
    console.log("MongoDB disconnected");
})

//Export the database connection
module.exports=db;
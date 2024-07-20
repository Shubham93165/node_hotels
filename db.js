const mongoose=require("mongoose");
require('dotenv').config();

//Define the MongoDB connection URL for local database
// const mongoURL='mongodb://localhost:27017/hotels';

//Define the MongoDB connection URL to host database
// const mongoURL='mongodb+srv://shubham123:Shubham12345@hotels.tsafr1c.mongodb.net/';

const mongoURL=process.env.MongoDB_URL;
// const mongoURL=process.env.mongoDB_URL_LOCAL;

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
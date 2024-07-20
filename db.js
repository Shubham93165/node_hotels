const mongoose=require("mongoose");

//Define the MongoDB connection URL
const mongoURL="mongodb://localhost:27017/hotels";

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
const mongoose=require("mongoose");

//schema for menu

const menuItemSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    taste:{
        type:String,
        enum:['sweet','spicy','sour'],
        required:true
    },
})

//create menu model

const Menu=mongoose.model("Menu",menuItemSchema);
module.exports=Menu;
const express=require("express");
const router=express.Router();
const Menu=require("./../Models/menu.js");

// GET method to get the menu data 
router.get("/",async(req,res)=>{
    try{
        const data=await Menu.find();
        console.log("data fetched successfully");
        res.status(200).json(data);

    }
    catch{
        console.log(err);
        res.status(500).json({error:'Internal server error'});
    }
})

//POST method to add menu item
router.post('/',async(req,res)=>{
    try{
        const data=req.body; //Assuming the request body contains the persons data

    // //Creating the new person document using mongoose model
    const newMenu=new Menu(data);

    // save the new person to the databse
    const response = await newMenu.save();
    console.log('data saved');
    res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});

    }

})

//Parameterised API
router.get('/:taste',async(req,res)=>{
    try{
        const taste=req.params.taste;
        if(taste=='sour'||taste=='spicy'||taste=="sweet"){
            const response=await Menu.find({taste:taste});
            console.log("response fetched");
            res.status(200).json(response);
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});

    }
})



module.exports=router;
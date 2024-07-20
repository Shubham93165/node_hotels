const express=require("express");
const router=express.Router();
const Person=require("./../Models/Person.js");


router.post('/',async(req,res)=>{
    try{
        const data=req.body; //Assuming the request body contains the persons data

    // //Creating the new person document using mongoose model
    const newPerson=new Person(data);

    // save the new person to the databse
    const response = await newPerson.save();
    console.log('data saved');
    res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});

    }
})

//GET method to get the person data
router.get("/",async(req,res)=>{
    try{
        const data=await Person.find();
        console.log("data fetched successfully");
        res.status(200).json(data);

    }
    catch{
        console.log(err);
        res.status(500).json({error:'Internal server error'});
    }
})


// GET method for paramerised API
router.get('/:workType',async(req,res)=>{
    try{
        const workType= req.params.workType; //Extract the work type from the URL parameter
        if(workType=='chef' || workType=='waiter' || workType=='manager'){
            const response=await Person.find({work: workType});
            console.log('response fetched');
            res.status(200).json(response);
        }
        else{
            res.status(404).json({error:'Invalid work type'});
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});
    }  
})

//PUT method to update the data
router.put("/:id",async(req,res)=>{
    try{
        const personId=req.params.id; //Extract the id from the URL parameter
        const updatePersonData= req.body; //Updated data for the person

        const response= await Person.findByIdAndUpdate(personId,updatePersonData,{
            new:true, //Return the updated document
            runValidators:true // Run mongoose validator and check the required fields
        })

        if(!response){
            return res.status(404).json({error:'Person not found'});
        }
        console.log("Data Updated");
        res.status(200).json(response);
    
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});
    }

})

// DELETE method to delete person data
router.delete("/:id",async(req,res)=>{
    const personId=req.params.id; //Extract the id from the URL parameter
    const response=await Person.findByIdAndDelete(personId);

    if(!response){
        return res.status(404).json({error:'Person not found'});
    }
    console.log("data deleted");
    res.status(200).json({message:'Person deleted successfully'});

})
//Comment for checking pupose of git hub.
module.exports= router;
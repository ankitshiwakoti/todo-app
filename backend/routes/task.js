const express=require('express');
const router=express.Router();


let Tasks=[
    {id:1, task:'Task 1', completed:false},
    {id:2, task:'Task 2', completed:false},
    {id:3, task:'Task 3', completed:true},
]

router.get('/',(req,res)=>{
    res.status(200).json({success:true, data:Tasks});
})

router.post('/',(req, res)=>{

    const newTask=req.body;
    newTask.id=Tasks.length+1;
    Tasks.push(newTask);
    res.status(201).json({success:true, data:newTask});


})

module.exports=router;
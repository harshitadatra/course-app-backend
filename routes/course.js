const {Router} = require('express');
const courseRouter = Router();
courseRouter.post("/purchase",(req,res)=>
{
   res.status(200).json({msg:"purchase endpoint"})
})

courseRouter.get("/preview",(req,res)=>
{
    res.status(200).json({msg:"preview endpoint"})
})

module.exports = {
    courseRouter :courseRouter
}
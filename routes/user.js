const  express = require('express');;
const userRouter = express.Router();

userRouter.post('/signup',(req,res)=>
{
  res.json({msg:"singup endpoint"})
})
userRouter.post("/signin",(req,res)=>
{
   res.json({msg:"signin endpoint"})
})
userRouter.get("/purchases",(req,res)=>
{
  res.json({msg:"purchases endpoint"})
})

module.exports = 
{
  userRouter:userRouter
}
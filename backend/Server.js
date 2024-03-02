const express=require ("express");
const app=express();
const cors=require("cors");
const dotenv=require("dotenv");
require("dotenv").config(".env");


//import routes

// middleware

console.log(process.env.MONGODB)
app.use(cors());

app.use(express.json());
const authRoute=require('./routers/index');
app.use('/api', authRoute)


app.get("/",(req,res)=>{
    console.log("ggg")
    res.status(200).json({msg:"Authorization using JWT"})
})


const PORT=5000
app.listen(PORT, function(){console.log("server running on port:" + PORT);});



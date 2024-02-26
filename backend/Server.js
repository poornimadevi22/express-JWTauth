const express=require ("express");
const app=express();
const cors=require("cors");




//import routes
const authRoute=require('./routers/index');

// middleware
app.use(cors());
app.use(express.json());
app.use('/api', authRoute);
app.get("/",(req)=>{
    console.log("ggg")
})


const PORT=4000;
app.listen(PORT, function(){console.log("server running on port:" + PORT);});

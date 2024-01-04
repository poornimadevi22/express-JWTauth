const express=require ("express");
const app=express();

app.use(express.json());

//import routes
const authRoute=require('./routers/index');

//Route middleware
app.use('/api', authRoute);



const PORT=3000;
app.listen(PORT, function(){console.log("server running on port:" + PORT);});

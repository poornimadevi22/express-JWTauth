const mongoose=require ("mongoose");
const bcrypt=require("bcryptjs")
const userSchema=require("../models/usermodel")
const jwt=require("jsonwebtoken")


// const dbURI = 'mongodb://localhost:27017/authorize';
const dbURI = "mongodb+srv://poorni22:2YCZOikgCMESOEnc@cluster0.b58qvdy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(dbURI)


exports.register= async(req,res)=>{
    console.log(req.body);
    const salt=bcrypt.genSalt(10);
    // const haspass=await bcrypt.hash(req.body.password, salt);

    //user objext
    let user=new userSchema({
        email:req.body.email,
        name:req.body.name,
        password:req.body.password,
        // user_type_id:req.body.user_type_id
    })


     user.save().then((userData)=>{
        console.log(userData)
        const token = jwt.sign(req.body, "secret");
        res.status(200).send({"status":"success","token":token})
     }).catch((err)=>{
           console.log(err);
        })
    
    }

    exports.login=async(req,res)=>{

      userSchema.findOne({email:req.body.email}).then(async (user) =>{
            
                if(user){
                    
                    const  validpass=await bcrypt.compare(req.body.password, user.password);
                 if (!validpass) return res.status(401).send("Mobile/Email or Password is wrong"); 
                 
                 let payload={id: user._id, user_type_id:user.user_type_id };
                 const token=jwt.sign(payload,"secret");

                 res.status(200).header("auth-token", token).send({"status":"success","token": token});
                }
                else{
                    res.status(401).send('Invalidmobile')
                }

            }).catch((err)=>{
                console.log(err)
            })
        }



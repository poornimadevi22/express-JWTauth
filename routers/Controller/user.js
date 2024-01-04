const mongoose=require ("mongoose");

const dbURI = 'mongodb://localhost:27017/your_database_name';
mongoose.connect(dbURI, function(err){
    if(err){
         console.error('Error'+ err)
    }else{
        console.log('connected to mongodb')
    }
})

exports.register= async(req,res)=>{
    const salt=bcrypt.genssalt(10);
    const haspass=await bcrypt.hash(req.body.password, salt);

    //user objext
    let user=new user({
        email:req.body.email,
        name:req.body.name,
        password:req.body.password,
        user_type_id:req.body.user_type_id
    })


     user.save((err,registeredUser)=>{
        if(err){
           console.log(err);
        }else{
         //create payload to access token
         let payload = { id: registeredUser._id, user_type_id: req.body.user_type_id || 0 };
            const token = jwt.sign(payload, config.TOKEN_SECRET);
            res.status(200).send({ token })
        
        }
     })
       
    
    
    
    }

    exports.login=async(req,res)=>{

      User.findOne({email:req.body.email}, async(err, user) =>{
            if(err){
                console.log(err);
            }else{
                if(user){
                    
                    const  validpass=await bcrypt.compare(req.body.password, user.password);
                 if (!validpass) return res.status(401).send("Mobile/Email or Password is wrong"); 
                 
                 let payload={id: user._id, user_type_id:user.user_type_id };
                 const token=jwt.sign(payload,config.TOKEN_SECRET);

                 res.status(200).header("auth-token", token).send({"token": token});
                }
                else{
                    res.status(401).send('Invalidmobile')
                }


            }

      })


    }



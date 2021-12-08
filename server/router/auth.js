const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

require("../db/conn");  //setting up db connection here
const User = require("../models/userSchema");    //importing the database structure

router.get('/',(req,res) => {
    res.send("Home Router");
});


//registration route

// router.post('/register', (req,res)=>{
    
//     const {name,email,phone,password} = req.body;
//     // now name will be like req.body.name and email will be req.body.email and so on

//     if(!name || !email || !phone || !password){
//         return res.status(422).json({error: "Fill empty fields"});
//     }

//     User.findOne({email:email})
//         .then((userExists)=>{
//             if(userExists){
//                 return res.status(422).json({error: "E-Mail already exists"});
//             }

//             const user = new User({name,email,phone,password});

//             user.save().then(()=>{
//                 res.status(201).json({message: "Registration Successful"});
//             }).catch((err)=>res.status(500).json({error: "Failed to register"}));
//         }).catch(err =>{console.log(err)});
// });

router.post('/register', async (req,res)=>{
    
    const {name,email,phone,password} = req.body;
    // now name will be like req.body.name and email will be req.body.email and so on

    if(!name || !email || !phone || !password){
        return res.status(422).json({error: "Fill empty fields"});
    }

    try{
        const emailExists = await User.findOne({email:email});
        if(emailExists){
            return res.status(422).json({error: "E-Mail already exists"});
        }
        const phoneExists = await User.findOne({phone:phone});
        if(phoneExists){
            return res.status(422).json({error: "Phone Number already in use"});
        }

        const user = new User({name,email,phone,password});
        const userRegister = await user.save();
        res.status(201).json({message: "Registration Successful"});


    }catch(err){
        console.log(err);
    }
});


// login route
router.post('/login',async (req,res)=>{
    try{
        let token;
        const {email,password} = req.body;

        if(!email || !password){
            return res(400).json({error:"Fill empty fields"});
        }

        const userLogin = await User.findOne({email:email});
        if(userLogin){
            const isMatch = await bcrypt.compare(password,userLogin.password);

            token = await userLogin.generateAuthToken();
            res.cookie('jwtoken',token,{
                expires: new Date(Date.now()+3600000),  //token will expire in 1 hour
                httpOnly:true
            })

            if(!isMatch){
                res.status(400).json({error: "Invalid Credentials"});
            }
            else{
                res.json({message: "Signed In"});
            }
        }
        else{
            res.status(400).json({error: "Invalid Credentials"});
        }
        
    }catch(err){
        console.log(err);
    }
})


module.exports = router
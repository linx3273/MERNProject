const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({path:'./config.env'});

mongoose.connect(process.env.DATABASE,{
    useUnifiedTopology:true,
    useNewUrlParser:true,
}).then(()=>{
    console.log("Connected to database");
}).catch((err)=>console.log("Could not connect to the database"));
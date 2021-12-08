const dotenv = require('dotenv');
const express = require('express');
const app = express();


dotenv.config({path:'./config.env'});
require('./db/conn');

// const User = require('./model/userSchema');
app.use(express.json());
app.use(require('./router/auth'));

 
app.get('/about',(req,res) => {
    res.send("aboutus");
});
app.get('/catalogue',(req,res)=>{
    res.send("catalogue of cars")
});


app.listen(process.env.PORT,()=>{
    console.log(`Server running on port: ${process.env.PORT}`);
});
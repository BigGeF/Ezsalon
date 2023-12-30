const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config()
const User = require('./models/User.js');
const bcrypt = require('bcryptjs');
const {json} = require("express");
const jwt = require('jsonwebtoken');
const bcryptSalt =bcrypt.genSaltSync(10);
const jwtSecret = '132rfds2fredfd4345gvqwgr354yygfd252gtwfdg';
app.use(express.json())

app.use(cors({
  credentials:true,
  origin:"http://192.168.1.76:5173",
}))

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("DB connected!"));

mongoose.connection.on('error',function(err){
  console.log("The error is: ");
});

app.get("/test", (req, res) => {
  res.json("test ok");
});
// LcCcUHMvowYVldja

app.post('/register',async (req,res)=> {
  const {firstName, lastName, email, password} = req.body;
  try{
    const userDoc = await User.create({
      firstName,
      lastName,
      password:bcrypt.hashSync(password, bcryptSalt),
      email
    });
  res.json(userDoc)
  }catch (e){
    res.status(422).json(e);
  }
});

app.post('/login',async (req,res)=>{
  const{email,password} = req.body;
  const userDoc =  await User.findOne({email})
  if(userDoc){
    const passOk = bcrypt.compareSync(password,userDoc.password)
    if(passOk){
      jwt.sign({email:userDoc.email, id:userDoc._id},jwtSecret,{},(err,token)=>{
        if(err) throw err;
        res.cookie('token',token ).json(userDoc);
      })
    }else{
      res.status(422).json('pass not ok');
    }
  }else{
    res.json("not found")
  }
})

app.listen(4000);

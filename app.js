const express = require("express");
const app = express();
app.use(express.json())
const cors = require("cors");
app.use(cors());
const mongoose = require("mongoose");
app.listen(5000,()=> {
    console.log("server started");
});
const mongoUrl = "mongodb+srv://mathur:<password>@cluster0.cs8spsi.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(mongoUrl,{
    useNewUrlParser:true
}).then(()=>{console.log("connected to database");})
.catch((e)=>console.log(e));

require("./userDetails")

const User = mongoose.Model("UserInfo");
app.post("/register",async (req,res)=>{
    const { fname, lname, email, password } = req.body;

    try{
        await User.create(
            {
                fname,
                lname,
                email,
                password,

            }
        );
        res.send({status:"ok"});
    


 } catch (error) {
    res.send({status:"Error"});

    }
    
});

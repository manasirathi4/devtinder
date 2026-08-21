const express = require("express");
const app = express();

const User = require("./config/models/user");
const connectdb = require("./config/database");

app.use("/signup",async(req,res)=>{
const user= new User({
firstname:"manasi",
lastname:"rathi",
emailid:"manasi@gmail.com",
password:"1234",


});

await user.save();
res.send("user added successfully!!");
});



connectdb()
    .then(() => {
        console.log("database is connected");

        app.listen(3000, () => {
            console.log("listening to server ....");
        });
    })
    .catch((err) => {
        console.log(err);
    });
const express=require("express");
const app=express();
//app.use((req,res)=>{

    
    //res.send("world is beautiful!");

//});

app.use("/hello",(req,res)=>{
    res.send("hiiii!");

});

app.use("/test",(req,res)=>{
    res.send("abracadabra!!");

});

app.listen(3000,() =>{

console.log("server is listning");
});

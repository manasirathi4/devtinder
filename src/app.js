const express=require("express");
const app=express();
//app.use((req,res)=>{

    
    //res.send("world is beautiful!");

//});



//app.use("/test",(req,res)=>{
   // res.send("abracadabra!!");

//});


//app.get("/hello",(req,res)=>{
//res.send("heiiiii");


//});
app.use("/hii",(req,res,next)=>{
console.log("okayyyy");
res.send("response");
next();


},
(req,res)=>{
res.send("2nd response");


});
app.listen(3000,() =>{

console.log("server is listning");
});
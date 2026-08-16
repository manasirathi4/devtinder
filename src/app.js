const express=require("express");
const app=express();
app.use((req,res)=>{
    res.send("world is beautiful!");

});




app.listen(3000,() =>{

console.log("server is listning");
});

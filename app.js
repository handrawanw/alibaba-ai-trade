const express=require("express");
const app=express();

const PORT=process.env.PORT||3000;

app.get("/",(req,res)=>{
    res.send("Bismillah project robot trading cuan semoga berhasil");
});

app.get("/api",(req,res)=>{
    res.status(200).json({
        message:"Bismillah project robot trading cuan semoga berhasil",
        status:200
    });
});

app.listen(PORT,(err)=>{
    if(err) throw err;
    console.log(`Server is running ${PORT}`);
});
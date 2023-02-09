const express = require("express");
const app = express();


app.get("/",(req,res)=>{
    res.json("Welcome to express")
})

app.get("/api", (req,res)=>{
    res.json({"users":["user 1","user2","user3"]})
    res.end()
})


app.listen(5000, ()=>{
    console.log("Listening to port 5000")
})
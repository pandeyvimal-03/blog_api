import express from "express";
import config from "./config.js";

const app = express()

app.get("/" , (req , res)=>{
    res.send({msg : "You are connected with server"})
})

app.listen(config.port , ()=>{
    console.log("server started successfully on port : ", config.port)
})

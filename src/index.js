import express from "express";
import config from "./config.js";

const app = express()

app.get("/" , (req , res)=>{
     res.send({msg : "You are connected with server"})
})

app.get("/services" , (req , res)=>{
     res.send({services : "List of services are not available now"})
})

app.listen(config.port , ()=>{
    console.log("server started successfully on port : ", config.port)
})

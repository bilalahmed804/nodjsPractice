import express from "express";
import cors from "cors"
const app = express()

app.use(cors())

app.get("/",(req , res)=>{
    res.send("Hello world response")
})
app.get("/user",(req , res)=>{
    res.send([{name:"ahmed"}])
})
app.post("/posts",(req , res)=>{
    res.send({message:"Post Request"})
})

app.listen(3000, ()=>{
    console.log("Sever in runing on 3000");
    
})



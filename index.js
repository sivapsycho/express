const express=require("express")
const app=express()
const port=2000;

const employee={rollno:49,name:"gandhi",position:"supply manager"}
const students=require("./data.js")
app.get("/",(req,res)=>{
	res.send("gandhi is writing sem2 supply economics")
})
app.get("/demo",(req,res)=>{
	res.send("demo route")
})
app.get("/emp",(req,res)=>{
	res.json(employee)
})
app.get("/students-list",(req,res)=>{
	res.json(students)
})
app.listen(port,()=>console.log("serveris running on port"))
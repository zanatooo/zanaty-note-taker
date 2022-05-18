const app=require ("express").Router()
let db = require("../db/db.json");
const fs = require("fs")

app.get("/api/notes",function(res,res){
   db = JSON.parse(fs.readFileSync("/db/db.json"))
   console.log("get",db);
   res.json(db)
})


app.post("/api/notes",function(res,res){
    let data={
        title:req.body.title,
        text:req.body.text,
        id: Math.floor(Math.random()*1009)
    }

db.push (data)
fs.writeFileSync("/db/db.json",JSON.stringify(db),function(err,data){
    if(err)throw err
})

    console.log("post",db);
    res.json(db)
 })
 

//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
// const ejs = require("ejs");
const app = express();
var item=[];
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));



app.get("/",function(req,res){

  var today = new Date();
  var options={
    weekday:"long",
    day:"numeric",
    month:"long"
  }
  var day=today.toLocaleString("en-US",options);
  res.render("list",{a:day,newItem:item});

});
app.post("/",function(req,res){
  item.push(req.body.todo);
  res.redirect("/");
});


app.listen(3000,function(){
  console.log("Server running on port 3000");
})

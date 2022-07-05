//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
// const ejs = require("ejs");
const app = express();

app.set("view engine","ejs");


app.get("/",function(req,res){
  var today = new Date();
  var currentDay = today.getDay();
  var day="";
  switch(currentDay){
    case 0:day="Sunday";break;
    case 1:day="Monday";break;
    case 2:day="Tuesday";break;
    case 3:day="Wednesday";break;
    case 4:day="Thusday";break;
    case 5:day="Friday";break;
    case 6:day="Saturday";break;
    default: break;
  }
  res.render("list",{a:day});
})


app.listen(3000,function(){
  console.log("Server running on port 3000");
})

//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const app = express();




var item = [];
var work = [];
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));



app.get("/", function(req, res) {

  var day = date.getDay();
  res.render("list", {
    listTitle: day,
    newItem: item
  });

});

app.post("/", function(req, res) {
  // console.log(req.body);
  if (req.body.list === "Work") {
    work.push(req.body.todo);
    res.redirect("/work");
  } else {
    item.push(req.body.todo);
    res.redirect("/");
  }
});

app.get("/work", function(req, res) {
  res.render("List", {
    listTitle: "Work List",
    newItem: work
  });
});

app.get("/about",function(req,res){
  res.render("about");
})
// app.post("/work",function(req,res){
//   work.push(req.body.todo);
//   res.redirect("/work");
// });


app.listen(3000, function() {
  console.log("Server running on port 3000");
})

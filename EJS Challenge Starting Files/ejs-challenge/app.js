//jshint esversion:6

const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";


const express = require("express");
const app = express();
const BodyParser = require("body-parser");
const ejs = require("ejs");
const _=require("lodash");


let posts=[];



app.use(BodyParser.urlencoded({ extends: true }))
app.set("view-engine", "ejs")
app.use(express.static("public"));
// app.use(express:static("partials"));


app.get("/", (req, res) => {
  res.render("home.ejs", { startingContent: homeStartingContent ,posts:posts});
});

app.get("/contactUs", (req, res) => {
  res.render("contact.ejs", { USContent: contactContent });
})

app.get("/about", (req, res) => {
  res.render("about.ejs", { AboutUs: aboutContent });
})

app.get("/compose", (req, res) => {
  res.render("compose.ejs");
})

app.post("/compose", (req, res) => {
  var post = {
    title: req.body.postTitle,
    postB: req.body.postBody
  }

  //  console.log(post.title);
  //  console.log(post.postB);
   posts.push(post);
    
  res.redirect("/")
})

app.get("/posts/:topic",(req,res)=>{
  const requestedTitle=_.lowerCase(req.params.topic);


  posts.forEach((post)=>{
    const storedTitle=_.lowerCase(post.title);

    if (requestedTitle===storedTitle) {
      console.log("Match Found");
      
      res.render("post.ejs",{postTitle:post.title,postB:post.postB});
    }
  })
})

app.listen(3000, () => {
  console.log("Server is running on  3000");
})


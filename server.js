/*********************************************************************************
*  WEB322 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Joel Biju Student ID: 148952203 Date: 17/09/2022
*
*  Cyclic Web App URL: https://blush-toad-tie.cyclic.app/
*
*  GitHub Repository URL: https://github.com/Joel414/helloworld.git
*
********************************************************************************/ 


var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

// setup a 'route' to listen on the default url path
app.get("/", (req, res) =>{
    res.send("Joel Biju - 148952203");
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);
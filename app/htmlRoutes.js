
var express = require('express');
var app = express();
var path = require('path');



// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
var router = function(){

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "./app/public/home.html"));
      });
    
      app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname, './app/public/survey.html'));
    });
    
    app.get('*', (req, res) => {
        console.log('Catch all')
        res.sendFile(path.join(__dirname, './app/public/home.html'))
      })
}



  module.exports=router;


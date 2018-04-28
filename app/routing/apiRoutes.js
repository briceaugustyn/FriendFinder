
var express = require('express');
var app = express();
var path = require('path');
var newdata= require('../data/seeds.json')

var friends = require('../data/friends')



//app.use('../data/friends', friends)
//friends.diplay()

//viewed at http://localhost:8080
app.get('/api/friends', function (req, res) {
    console.log('get')
    res.send(newdata);
});

app.post('/api/friends', (req, res) => {
    console.log('post')
    req.send(newdata);
  })




app.listen(8080);


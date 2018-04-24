
var express = require('express');
var app = express();
var path = require('path');



//viewed at http://localhost:8080
app.get('/survey', function (req, res) {
    res.sendFile('/Users/briceaugustyn/Code/W13/FriendFinder/app/public/Survey.html');
});

app.get('*', (req, res) => {
    console.log('Catch all')
    res.sendFile('/Users/briceaugustyn/Code/W13/FriendFinder/app/public/home.html')
  })


//app.get('/', (req, res) => res.send('Hello world34'))

// app.get('/add', function (req, res) {
//     res.sendFile(path.join(__dirname + '/add.html'));
// });
// app.get('/all', function (req, res) {
//     res.sendFile(path.join(__dirname + '/all.html'));
// });
// app.get('/api/characters', function (req, res) {
//     res.send(newdata);
// });



app.listen(8080);


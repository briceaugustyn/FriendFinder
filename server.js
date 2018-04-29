// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const friendsArray = [
  {
  "name": "Ahmed",
  "photo": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAq7AAAAJDAwYzI4NTQ4LWYwZWUtNGFkYS1hNTYwLTZjYzkwY2ViZDA3OA.jpg",
  "scores": [
  "5",
  "1",
  "4",
  "4",
  "5",
  "1",
  "2",
  "5",
  "4",
  "1"
  ]
  },
  ]

// Routes
// =============================================================
// Basic route that sends the user first to the AJAX Page

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



// Create New Characters - takes in JSON input
app.post("/api/friends", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newcharacter = req.body;

  console.log(newcharacter);

  // We then add the json the user sent to the character array
  friendsArray.push(newcharacter);
  console.log(friendsArray);
  // We then display the JSON to the users
  res.json(newcharacter);
});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

// API Routes
// ===========================================================
var friendsArray = require("../data/friends.js");

module.exports = function(app, path) {

    // All Friends
    app.get("/api/friends", function(req, res) {
        return res.json(friendsArray);
    });
  
    // New Friend Requested - Add to Array 
    app.post("/api/friends", function(req, res) {
        var friend = req.body;   // Because the friend info is sent to the server IN THE BODY
        console.log(json.stringify(friend));
        friendsArray.push(friend);  // Push the new character object into the array of characters
        res.json(friend);
    });
}; 
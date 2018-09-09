// API Routes
// ===========================================================
var friendsArray = require("../data/friends.js");
var newFriend;

module.exports = function(app, path) {

    // All Friends
    app.get("/api/friends", function(req, res) {
        return res.json(friendsArray);
    });
  
    // New Friend Requested - Add to Array 
    app.post("/api/friends", function(req, res) {
        newFriend = req.body;   // Because the friend info is sent to the server IN THE BODY
        console.log(JSON.stringify(newFriend));
        var closestMatch = 100;
        var bestFriend;
        var diff;
        for (var i=0; i<friendsArray.length; i++) {
            console.log();
            diff = 0;
            for (var j=0; j<10; j++) {
                diff += Math.abs(newFriend.scores[j] - friendsArray[i].scores[j]);
                console.log("friend = " + friendsArray[i].name + "  score #" + j + " = " + diff);
            }
            console.log("total diff = " + diff);
            if (diff < closestMatch) {
                closestMatch = diff;
                console.log("closest match is now " + friendsArray[i].name);
                bestFriend = friendsArray[i];
            }
        }
        friendsArray.push(newFriend);  // Push the new character object into the array of characters
        console.log("Best Friend is: " + bestFriend.name);
        res.json(bestFriend);
    });
}; 
// HTML Routes
// ========================================
    module.exports = function(app, path) {

    // Returns home.html
    app.get("/", function(req, res) {
        //var file = path.join(__dirname, "../public/home.html");
        //console.log("file = " + file);
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    // Returns survey.html
    app.get("/survey", function(req, res) {
        //var file = path.join(__dirname, "../public/survey.html");
        //console.log("file = " + file);
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
  
};

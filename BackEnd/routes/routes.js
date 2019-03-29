// require mysql in node modules to use it
const mysql = require("mysql");
const connection = require("../app");

// module.exports exports this function so it can be required by another file (server.js)
// Needs to be passed in app bc it contains the express application
module.exports = function(app, connection) {
  // If no matching route is found default to index.html
  app.get("/", function(req, res) {
    connection.query("SELECT * FROM users", function(err, data) {
      err ? res.send(err) : res.json({ users: data });
    });
    connection.end();
  });

  app.get("/matches", function(req, res) {
    res.send("Matches BITCHE");
  });
};

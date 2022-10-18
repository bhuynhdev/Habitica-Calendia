var express = require("express");
var router = express.Router();
var path = require("path");

/* GET home page. */
router.get("/", function (req, res, next) {
  // Need to .trim() because https://stackoverflow.com/questions/39529870/ifprocess-env-node-env-production-always-false
  const node_env = process.env.NODE_ENV.trim() || "development";
  if (node_env === "development") {
    return res.redirect("http://localhost:3000");
  }
  // Production
  return res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

module.exports = router;

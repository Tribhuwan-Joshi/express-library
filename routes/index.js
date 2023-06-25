var express = require("express");
var router = express.Router();   // now it is kinda same as app

/* GET home page. */
// GET home page.
router.get("/", function (req, res) {
  res.redirect("/catalog");   // redirect krdo
});  

module.exports = router;

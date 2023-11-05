const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  console.log("new");
  res.render("form", { title: "New message" });
});

router.post("/", function (req, res, next) {
  messages.push({
    text: req.body.msgText,
    user: req.body.msgUser,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;

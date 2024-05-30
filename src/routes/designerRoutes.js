const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcom to my first project");
});

router.get("/login", (req, res) => {
  res.send("Hi i am designer");
});

router.get("/register", (req, res) => {
  res.send("Creating an designer account");
});

module.exports = router;

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcom to my first project");
});

router.get("/login", (req, res) => {
  res.send("Hi i am user");
});

router.get("/register", (req, res) => {
  res.send("Creating an user account");
});

router.post("/register", (req, res) => {
  console.log(req.body);
  res.send("work done");
});

module.exports = router;

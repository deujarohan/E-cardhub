const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");

router.get("/", (req, res) => {
  res.send("Welcom to my first project");
});

router.post("/register", authController.register);

router.get("/login", authController.login);

router.post("/register", (req, res) => {
  console.log(req.body);
  res.send("work done");
});

module.exports = router;

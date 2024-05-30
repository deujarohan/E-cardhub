const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcom to my first project");
});

module.exports = router;

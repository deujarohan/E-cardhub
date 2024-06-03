const express = require("express");
const router = express.Router();
const designController = require("../controller/designController");
const authController = require("../controller/authController");

router.route("/").get(designController.designList);
router.route("/:id").get(designController.design).patch(authController.protect);

module.exports = router;

const express = require("express");
const router = express.Router();
const designController = require("../controller/designController");

router.route("/").get(designController.designList);
router.route("/:id").get(designController.design);

module.exports = router;

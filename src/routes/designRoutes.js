const express = require("express");
const router = express.Router();
const designController = require("../controller/designController");
const authController = require("../controller/authController");

router.route("/").get(designController.designList);
//   .post(
//     authController.protect,
//     authController.restrictTo("admin"),
//     designController.createDesign,
//   );

router
  .route("/:id")
  .get(authController.protect, designController.getdesign)
  .patch(
    authController.protect,
    authController.restrictTo("admin"),
    designController.updateDesign,
  )
  .delete(
    authController.protect,
    authController.restrictTo("admin"),
    designController.deleteDesign,
  );

module.exports = router;

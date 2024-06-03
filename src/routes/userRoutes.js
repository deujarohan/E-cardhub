const express = require("express");
const authController = require("../controller/authController");
const userController = require("../controller/userController");
const router = express.Router();

router.post("/register", authController.register);

router.post("/login", authController.protect, authController.login);

router.post("/forgotPassword", authController.forgotPassword);
router.patch("/resetPassword/:token", authController.resetPassword);

//this authentication function is a middleware which protect all routes after this with ths function
router.use(authController.protect);

router.patch("/updateMyPassword", authController.updatePassword);
router.get("/Me", userController.getMe, userController.getUser);
router.patch("/updateMe", userController.getMe, userController.updateMe);
router.delete("/deleteMe", userController.getMe, userController.deleteMe);

//after this all route are restricted and can be used only by admin
router.use(authController.restrictTo("admin"));
router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteMe);

module.exports = router;

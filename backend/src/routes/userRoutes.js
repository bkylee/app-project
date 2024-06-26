const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.get("/:id", userController.getUserProfile);
router.put("/profile/:id", userController.updateProfile);

module.exports = router;

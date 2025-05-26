const express = require("express");
const { register,login, forgotPassword, resetPassword } = require("../controllers/user.controller");
// const {uploadAvatar} = require("../middlewares/auth.middleware");

const router = express.Router();

router.post("/register",register);

router.post("/login", login);

router.post("/forgot-password", forgotPassword);

router.post("/reset-password", resetPassword);
 
module.exports = router;
const express = require("express");

const {
  getAllUsers,
  signupUser,
  loginUser,
} = require("../controllers/User.Controller");

const { signupvalidator } = require("../middlewares/signupvalidator");
const { loginvalidator } = require("../middlewares/loginvalidator");

const userRouter = express.Router();

userRouter.get("/", getAllUsers);
userRouter.post("/signup", signupvalidator, signupUser);
userRouter.post("/login", loginvalidator, loginUser);

module.exports = userRouter;

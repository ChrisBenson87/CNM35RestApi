const { Router } = require("express");
const { addUser, login, updateUser, deleteUser } = require("./controller");
const { hashpass, decryptPass, tokenCheck, } = require("../middleware");
const userRouter = Router();

userRouter.post("/user", hashpass, addUser);
userRouter.post("/login", decryptPass, login);
userRouter.get("/user", tokenCheck, login);
userRouter.patch("/user", tokenCheck, hashpass, updateUser);
userRouter.delete("/user/:username", tokenCheck, deleteUser);

module.exports = userRouter;
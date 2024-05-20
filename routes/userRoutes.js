const express = require("express")

const userRouter = express.Router()
const cors = require("cors");
const { signup, login, logout, getTotalUsers } = require("../controller/userController");
const app = express()

const corsOptions = {
    origin: process.env.CLIENT_URL || '*', 
    credentials: true,
    optionsSuccessStatus: 200, 
};
app.use(cors(corsOptions))

userRouter.post("/signup", signup)
userRouter.post("/login", login)
userRouter.post("/logout", logout)
userRouter.get("/getUsers", getTotalUsers)


module.exports = userRouter;
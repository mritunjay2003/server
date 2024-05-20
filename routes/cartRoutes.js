const express = require("express");
const cartRoutes = express.Router();

const {auth, isUser} = require("../middelware/auth")

const {
  addToCart,
  deleteCart,
  updateCart,
  getCartItems,
  removeAllCartItems,
} = require("../controller/cartController");
const cors = require("cors");
const app = express();

app.use(cors());
cartRoutes.post("/",  addToCart);
cartRoutes.delete("/",  deleteCart);
cartRoutes.put("/", updateCart);
cartRoutes.get("/:id", getCartItems);
cartRoutes.post("/remove",  removeAllCartItems);

module.exports = cartRoutes;

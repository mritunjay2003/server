const express = require("express");
const { auth, isAdmin } = require("../middelware/auth")

const {
  addProduct,
  editProduct,
  deleteProduct,
  getProductById,
  getAllProducts,
  getCategoryByProduct,
  searchProduct,
  getManProducts,
  getWomanProducts,
  getKidsProducts,
} = require("../controller/productController");
const productRouter = express.Router();
const cors = require("cors");
const app = express();
app.use(cors());
productRouter.post("/", addProduct);
productRouter.put("/:id", auth, isAdmin, editProduct);
productRouter.delete("/delete/:id", auth, isAdmin, deleteProduct);
productRouter.get("/:id", getProductById);
productRouter.get("/", getAllProducts);
productRouter.get("/category/:category", getCategoryByProduct);
productRouter.get("/search/product", searchProduct);
productRouter.get("/man/:id", getManProducts);
productRouter.get("/woman/:id", getWomanProducts);
productRouter.get("/kid/:id", getKidsProducts);

module.exports = productRouter;

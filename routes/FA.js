const express = require("express");
const {
  getProducts,
  createNewProduct,
  getProductById,
} = require("../controllers/FA");
const router = express.Router();

// router.get("/FA", getFA);
router.get("/FAs", getProducts);
router.post("/FAs", createNewProduct);
router.get("/FAs/:id", getProductById);

module.exports = router;

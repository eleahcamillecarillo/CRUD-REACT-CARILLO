const express = require("express");
const router = express.Router();
const productController = require("../controllers/products");

//INSERT PRODUCT
router.get("/products", productController.index);

module.exports = router;
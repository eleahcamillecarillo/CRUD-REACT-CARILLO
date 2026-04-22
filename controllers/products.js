const db = require("../config/db")
const { success, error } = require("../utils/response");
const Product = require("../model/productModel");

//GET ALL PRODUCTS
const index = async (req, res) => {
    try {
        const results = await Product.getAllProducts(db);
        return success(res, results, "Products retrieved successfully");
    } catch (err) {
return error(res, err.message,500);
    }
};


//INSERT PRODUCT
const create = async (req, res) => {
    try {
        const result = await Product.createProduct(req.body);

        return success(res, result, "Products created successfully");
    } catch (err) {
return error(res, err.message,500);
    }
};


module.exports = {
    index,
    create
};

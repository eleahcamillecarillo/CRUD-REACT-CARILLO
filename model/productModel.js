const db = require("../config/db");

exports.getAllProducts = async (db) => {
    const [rows] = await db.query("SELECT * FROM tblproducts");
    return rows;
};

// exports.findById = async (id) => {
//     const [row] = await db.query("SELECT * FROM tblproducts WHERE id_product = ?",)
//     return rows [0];
// };

exports.createProduct = async (data) => {
    const { product, category} = data;

    const [result] = await db.query(
        "INSERT INTO tblproducts (product, category) VALUES(?, ?)",
        [product, category]
    );

    return result;
};


import Query from "../models";

const getOneProduct = (id: number) => {
    return Query("SELECT * FROM products WHERE ProductID = ?", [id]);
};

const getAllProducts = () => {
    return Query("SELECT * FROM products");
};

export default {
    getOneProduct,
    getAllProducts
}
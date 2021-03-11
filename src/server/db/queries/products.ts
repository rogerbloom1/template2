import { IProduct } from "../../../client/utils/types";
import Query from "../models";

const getOneProduct = (id: number) => {
    return Query("SELECT * FROM products WHERE ProductID = ?", [id]);
};

const getAllProducts = () => {
    return Query("SELECT * FROM products");
};

const insertProduct = (body: IProduct) => {
    return Query("INSERT INTO products SET ?", [body]);
};

export default {
    getOneProduct,
    getAllProducts,
    insertProduct
};
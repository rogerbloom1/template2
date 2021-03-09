import * as React from "react";
import { IProduct } from "./utils/types";

const Products: React.FC = () => {
    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        fetchProducts();
    }, []);
    
    const fetchProducts = () => {
        fetch("/api/products")
        .then(res => res.json())
        .then((data) => setProducts(data))
        .catch((err) => console.log(err));
        };

    return (
        <main>
            <h1>Products</h1>
            <ul className = "list-group">
                {products.map((p: IProduct) => {
                    return (
                        <li key={p.ProductID} className="list-group-item">
                            [p.Name]
                        </li>
                    );
                })}
            </ul>
        </main>
    );
};

export default Products;

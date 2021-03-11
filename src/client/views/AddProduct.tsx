import * as React from "react";

const AddProduct = () => {
    const formSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const Name: string = document.getElementById("productName");
        const Price: string = document.getElementById("productPrice");
        const StockLevel: string = document.getElementById("productInStock");
        const OnSale: string = document.getElementById("productOnSale");

        fetch("/api/products", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON, stringify({Name, Price, OnSale, StockLevel})
        })
    };
    return (
        <main>
            <h1>Add Product</h1>
            <form onSubmit={formSubmit}>
                <div>
                    <label htmlFor="productName">Product Name:</label>
                    <input type="text" name="productName" id="productName" />
                </div>
                <div>
                    <label htmlFor="productPrice">Price:</label>
                    <input type="text" name="productPrice" id="productPrice" />
                </div>
                <div>
                    <label htmlFor="onSale">On Sale:</label>
                    <input type="text" name="onSale" id="ProductOnSale" />
                </div>
                <div>
                    <label htmlFor="stockLevel">In Stock:</label>
                    <input type="text" name="stockLevel" id="ProductInStock" />
                </div>
                <div>
                    <input type="submit" />
                </div>
            </form>
        </main>
    );
};
export default AddProduct;
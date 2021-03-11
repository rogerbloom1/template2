import * as React from "react";

const AddProduct = () => {
    const [Name, setName] = React.useState<string>("");
    const [CategoryID, setCategoryID] = React.useState<number>(1);
    const [Price, setPrice] = React.useState<number>(0);
    const [OnSale, setOnSale] = React.useState<number>(0);
    const [StockLevel, setStockLevel] = React.useState<string>("");
    const [categories, setCategories] = React.useState<any[]>([]);

    React.useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = () => {
        fetch("/api/categories")
        .then((res) => res.json())
        .then((c) => setCategories(c))
        .catch((err) => console.log(err));
    };
    
    const formSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        fetch("/api/products", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({Name, Price, OnSale, StockLevel, CategoryID}),
        })
            .then(res => res.json())
            .then((res) => console.log(res))
            .catch(err => console.log(err));
    };

    return (
        <main>
            <h1>Add Product</h1>
            <form onSubmit={formSubmit}>
                <div>
                    <label htmlFor="productName">Product Name:</label>
                    <input 
                        type="text" 
                        name="productName" 
                        id="productName" 
                        onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="productCategory">Product Name:</label>
                    <select
                        name="productCategory" 
                        id="productCategory" 
                        onChange={(e) => setCategoryID(Number(e.target.value))} 
                    >
                        {categories.map((category) => {
                            return 
                            <option value={category.CategoryID} key={category.CategoryID}>
                                {category.Name}
                            </option>
                        })}
                    </select>
                </div>
                <div>
                    <label htmlFor="productPrice">Price:</label>
                    <input 
                        type="text" 
                        name="productPrice" 
                        id="productPrice" 
                        onChange={(e) => setPrice(Number(e.target.value))} />
                </div>
                <div>
                    <label htmlFor="onSale">On Sale:</label>
                    <select onChange={(e) => setOnSale(Number(e.target.value))}>
                        <option value="0">No</option> 
                        <option value="1">Yes</option> 
                    </select>
                </div>
                <div>
                    <label htmlFor="stockLevel">In Stock:</label>
                    <input 
                        type="text" 
                        name="stockLevel" 
                        id="productStockLevel" 
                        onChange={(e) => setStockLevel(e.target.value)}/>
                </div>
                <div>
                    <input type="submit" />
                </div>
            </form>
        </main>
    );
};
export default AddProduct;
import * as React from "react";
import {useParams} from "react-router";
import {IProduct} from "../utils/types";

const ProductView: React.FC = () =>  {
    const [product, setProducts] = React.useState<IProduct>(null);
    
    const params: any = useParams();

    React.useEffect(() => {
        fetchProduct();
    }, [])

    const fetchProduct = () => {
        fetch(`/api/products/${params.id}`)
        .then((res) => res.json())
        .then(([p]) => setProducts(p))
        .catch((err) => console.log(err)); 
        
    };

    return (
        <main>
            <div>
                <h1>{product?.Name}</h1>
                <p>${product?.Price}</p>
            </div>
        </main>
    );
};

export default ProductView;
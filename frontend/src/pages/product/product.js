import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
    }, []);

    const getProducts = async () => {
        let result = await fetch('http://​localhost:5000/products');
        result = await result.json();
        setProducts(result);
    };

    const deleteProduct = async (id) => {
        let result = await fetch(`http://​localhost:5000/product/${id}`,{
            method: 'delete'
        });
        result = await result.json();
        if(result){
            getProducts();
        }
    };

    const updateProduct = (id) => {

    }
    return (
        <div className="product-list">
            <h1>Product List </h1>
            <ul>
                <li>S. No</li>
                <li>Name</li>
                <li>Price</li>
                <li>Company</li>
                <li>Action</li>
            </ul>
            {
                products.map((item, index) =>
                    <ul key={item._id}>
                        <li>{index+1 }</li>
                        <li>{item.name}</li>
                        <li>R.s {item.price}</li>
                        <li>{item.company}</li>
                        <li><Link to={"/product/update/"+item._id}>Update</Link> | <Button variant="outlined" color="error" onClick={()=>deleteProduct(item._id)}>Delete</Button></li>
                    </ul>
                )
            }
        </div>
    )
};

export default Product;
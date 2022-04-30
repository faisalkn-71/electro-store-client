import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './products.css'

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect( () => {
        fetch('items.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div id='products' className='container-fluid my-5'>
            <h1  className='mb-3 text-bold text-primary'>PRODUCTS</h1>
            <div className='products-container'>
            {
                products.map(product => <Product
                key = {product._id}
                product = {product}
                ></Product>)
            }
            </div>
        </div>
    );
};

export default Products;
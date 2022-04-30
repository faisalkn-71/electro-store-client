import React from 'react';
import './product.css'

const Product = ({ product }) => {
    return (
        <div className='text-start p-3'>
            <img width="250px" height="250px" src={product.picture} alt="" />
            <h4>{product.name}</h4>
            <div className='paragraph-gap'>
                <p>Quantity: {product.quantity}</p>
                <p>Supplier name: {product.supplier_name}</p>
                <p>Price: {product.price}</p>
                <p><small>{product.description}</small></p>
            </div>
            <button className='btn btn-primary'>Update</button>
        </div>
    );
};

export default Product;
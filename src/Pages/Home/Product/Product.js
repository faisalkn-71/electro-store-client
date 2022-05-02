import React from 'react';
import { useNavigate } from 'react-router-dom';
import './product.css'

const Product = (props) => {
    const { _id, name, quantity, price, description, picture, supplier_name } = props.product;
    const navigate = useNavigate()
    const navigateToProductDetail = id => {
        navigate(`product/${id}`);
    }

    return (
        <div className='text-start p-3 border border-gary'>
            <img width="100%" height="250px" src={picture} alt="" />
            <h4 className='mt-2'>{name}</h4>
            <div className='paragraph-gap'>
                <p>Quantity: {quantity}</p>
                <p>Supplier name: {supplier_name}</p>
                <p>Price: {price}</p>
                <p><small>{description}</small></p>
            </div>
            <br />
            <div className='d-flex justify-content-between'>
                <button onClick={() => navigateToProductDetail(_id)} className='btn btn-primary'>Update</button>
                <button className='btn btn-danger'>Delete</button>
            </div>
        </div>
    );
};

export default Product;
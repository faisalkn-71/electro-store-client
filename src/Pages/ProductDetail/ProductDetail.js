import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])



    return (
        <div className='container-fluid mt-4 text-start'>
            <img className='w-100' height='400px' src={product.picture} alt="" />
            <div>
                <h2 className='mt-3'>{product.name}</h2>
                <p>ID: {product._id}</p>
                <p>Price: {product.price}</p>
                <p>Quantity: {product.quantity}</p>
                <p>Supplier Name: {product.supplier_name}</p>
                <p><small>{product.description}</small></p>
                <button className='btn btn-danger' title='Reduce the quantity by one'>Delivered</button>
                <br />
                <br />
                <div className='d-flex justify-content-start'>
                    <input type="number" name="quantity" placeholder='Enter a number for increasing quantity' id="" />
                    <button className='btn btn-primary' title='Increase the quantity'>Increase</button>
                </div>
            </div>
            <br />
            <br />
            <div className='d-flex justify-content-center '>
                <Link className='mt-5 px-5 btn btn-dark rounded-pill' to='/products'>Manage Products</Link>
            </div>
        </div>
    );
};

export default ProductDetail;
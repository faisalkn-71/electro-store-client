import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hook/useProducts';
import Product from '../Home/Product/Product';

const AllProducts = () => {
    const [products, setProducts] = useProducts([]);
    return (
        <div className='container-fluid my-5'>
            <h1 className='mb-3 text-bold text-primary'>PRODUCTS</h1>
            <div className='products-container'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
                <br/>
                <br/>
                <div>
                    <Link to='/addProduct' className='btn btn-dark'>Add Product</Link>
                </div>
        </div>
    );
};

export default AllProducts;
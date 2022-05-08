import { Link, useParams } from 'react-router-dom';
import useProductDetail from '../../hook/useProductDetail';
import React, { useState, useEffect } from 'react';

const ProductDetail = () => {
    const { productId } = useParams();
    const [product, setProduct] = useProductDetail(productId);

    const [quantity, setQuantity] = useState({});
    useEffect(() => {
        const url = `https://pure-bayou-63528.herokuapp.com/product/${productId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setQuantity(data))
    }, [])
  

    // Inceasing quantity by clicking on Increase button

    const handleIncrease = event => {
        event.preventDefault();

        const quantity = event.target.quantity.value;
        console.log(quantity)

        const updateQuantity = {quantity};


        const url = `https://pure-bayou-63528.herokuapp.com/product/${productId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateQuantity)
        })
        .then(res => res.json())
        .then(data =>{
            setQuantity(data)
            console.log('success', data);
            alert('Quantity updated successfully on server and now reload the page for showing in the UI.!!!');
            event.target.reset();
            
        })

        
    }



    // Decreasing quantity by clicking on Delivered button

    const handleDelivered = () => {
        const quantityText = product.quantity;
        const quantity = parseInt(quantityText)

        const newQuantity = quantity - 1;
        console.log(newQuantity)

        const updateQuantity = {newQuantity};

        const url = `https://pure-bayou-63528.herokuapp.com/product/${productId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateQuantity)
        })
        .then(res => res.json())
        .then(data =>{
            setQuantity(data)
            console.log('success', data);
            alert('Quantity updated successfully on server and now reload the page for showing in the UI.!!!');
        })

    }


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

                <button onClick={handleDelivered} className='btn btn-danger' title='Reduce the quantity by one'>Delivered</button>

                <br />
                <br />

                <form onSubmit={handleIncrease}>
                    <input type="number" name="quantity" placeholder='Enter a number for increasing quantity' id="" />

                    <br />

                    <input className='btn btn-primary' type="submit" value="Increase" />
                </form>

                

                <div>
                    <Link className='mt-5 px-5 btn btn-success rounded-pill' to={`/checkout/${productId}`}>Proceed Order</Link>
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
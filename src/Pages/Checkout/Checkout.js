import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import useProductDetail from '../../hook/useProductDetail';
import axios from 'axios'
import {toast } from 'react-toastify';


const Checkout = () => {
    const {productId} = useParams();
    const [product, setProduct] = useProductDetail(productId);
    const [user] = useAuthState(auth);


    const handleOrderNow = event => {
        event.preventDefault();
        const order = {
            email: user.email,
            name: product.name,
            productId: productId,
            address: event.target.address.value,
            quantity: event.target.quantity.value,
            phone: event.target.phone.value,
        }
        axios.post('https://pure-bayou-63528.herokuapp.com/order', order)
        .then(response => {
            const {data} = response;
            if(data.insertedId){
                toast("Your Order is Proceed!!!")
            }
        })

    }


    return (
        <div className='container w-50 mt-3 mx-auto'>
            <h2 className='text-primary'>Add to MyProduct</h2>
            <form onSubmit={handleOrderNow}>
                <input className='w-100 mb-2' type="text" name='name' placeholder='Name' value={user?.displayName} required readOnly disabled />
                
                <input className='w-100 mb-2' type="text" name='email' placeholder='Email' value={user?.email} required readOnly disabled />
                
                <input className='w-100 mb-2' type="text" name='product name' placeholder='Product Name' value={product.name} required readOnly />
                
                <input className='w-100 mb-2' type="text"  name='address' placeholder='address' autoComplete='off' required />
               
                <input className='w-100 mb-2' type="text"  name='quantity' placeholder='Quantity' required  />

                <input className='w-100 mb-2' type="text"  name='phone' placeholder='phone' required  />
                
                <input className='btn btn-primary' type="submit" value="Order Now" />
            </form>
        </div>
    );
};

export default Checkout;
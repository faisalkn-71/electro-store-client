import React from 'react';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import axiosPrivate from '../../api/axiosPrivate';
import Item from '../Item/Item';
import useMyProduct from '../../hook/useMyProduct';



const MyProduct = () => {
    const [myProduct, setMyProduct] = useMyProduct([])

    return (
        <div>
            <h1>My Product: {myProduct.length}</h1>
            <div className='products-container'>
            {
                myProduct.map(pd => <Item
                key = {pd._id}
                pd = {pd}
                ></Item>)
            }
            </div>
            
        </div>
    );
};

export default MyProduct;
import React from 'react';
import Item from '../Item/Item';
import useMyProduct from '../../hook/useMyProduct';



const MyProduct = () => {
    const [myProduct, setMyProduct] = useMyProduct([])

    return (
        <div className='container mt-4'>
            <h2>My Product: {myProduct.length}</h2>
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
import React from 'react';
import useMyProduct from '../../hook/useMyProduct';

const Item = (props) => {
    const [myProduct, setMyProduct] = useMyProduct([])
    const { _id, name, productId } = props.pd;

    const handleDelete = id => {
        const proceed = window.confirm("Are you sure?");
        if(proceed){
            const url = `https://pure-bayou-63528.herokuapp.com/order/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const remaining = myProduct.filter(product => product._id !== id);
                setMyProduct(remaining);
            })

        }
    }


    
    return (
        <div className='p-3 border border-gary'>
            <h3>{name}</h3>
            <p><small>ID: {productId}</small></p>
            <button onClick={() => handleDelete(_id)} className='btn btn-danger'>Delete</button>
        </div>
    );
};

export default Item;
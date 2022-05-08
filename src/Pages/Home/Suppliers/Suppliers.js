import React, { useEffect, useState } from 'react';
import Supplier from '../Supplier/Supplier';
import './Suppliers.css'

const Suppliers = () => {
    const [suppliers, setSuppliers] = useState([]);
    useEffect(() => {
        fetch('https://pure-bayou-63528.herokuapp.com/suppliers')
        .then(res => res.json())
        .then(data => setSuppliers(data))
    }, [])
    return (
        <div className='container-fluid my-5'>
            <h1 className='mb-3 text-bold text-primary'>Our Trustable Suppliers</h1>
            <div className='suppliers-container'>
            {
                suppliers.map(supplier => <Supplier
                key={supplier._id}
                supplier = {supplier}
                ></Supplier>)
            }
            </div>

        </div>
    );
};

export default Suppliers;
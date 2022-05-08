import React from 'react';

const Supplier = (props) => {
    const {supplier_name, picture} = props.supplier;
    return (
        <div className='mt-3'>
            <img width="100px" height="100px" src={picture} alt="" />
            <h6 className='mt-1'>{supplier_name}</h6>
            
        </div>
    );
};

export default Supplier;
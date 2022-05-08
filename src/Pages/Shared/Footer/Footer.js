import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='mt-5 text-white bg-dark py-4'>
            <p><small>copyright &copy; {year}, reserved by <b>Faisal Karim</b></small></p>
        </div>
    );
};

export default Footer;
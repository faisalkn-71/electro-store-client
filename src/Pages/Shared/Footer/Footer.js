import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='mt-5'>
            <p><small>copyright &copy; {year}</small></p>
        </div>
    );
};

export default Footer;
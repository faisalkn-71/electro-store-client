import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';


const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    style={{ height: '90vh' }}
                    className="d-block w-100"
                    src="https://i.ibb.co/GkCSPvP/banner.webp"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <div className='bg-black bg-opacity-75'>
                        <h3>Committed with Buyer</h3>
                        <p>In the Electronic items section it's hard to find a trustable company. That's why we am here. We are committed with our buyers.</p>
                    </div>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height: '90vh' }}
                    className="d-block w-100"
                    src="https://i.ibb.co/J2VRt02/banner-2.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <div className='bg-black bg-opacity-75'>
                        <h3>Provide the best Products</h3>
                        <p>We provide the best electronic goods in the world for your shop and your bussiness.</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    );
};
export default Banner;
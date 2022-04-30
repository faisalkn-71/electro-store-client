import React from 'react';

const Review = (props) => {
    const {name, image, feedback} = props.review;
    
    return (
        <div>
            <img width="50px" height="50px"  src={image} alt="" />
            <h5>{name}</h5>
            <p className='text-start'><small>{feedback}</small></p>
        </div>
    );
};

export default Review;
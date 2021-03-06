import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://pure-bayou-63528.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <div id='reviews' className='container-fluid my-5 bg-light py-3'>
            <h1 className='mb-3 text-bold text-primary'>Happy Buyers Feedback</h1>
            <div className='reviews-container'>
                {
                    reviews.map(review => <Review
                    key={review._id}
                    review = {review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;
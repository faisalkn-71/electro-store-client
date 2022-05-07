import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <div id='reviews' className='container-fluid my-5'>
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
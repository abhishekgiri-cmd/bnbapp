
import React, { useState } from 'react';
import StarRating from './StarRating';
import { Button } from "react-bootstrap";

const Product = ({ product }) => {
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState({ rating: 0, comment: '' });
    const [clickedStars, setClickedStars] = useState(0);

    const handleAddReview = () => {
        if (clickedStars > 0) {
            setReviews([...reviews, { rating: clickedStars, comment: newReview.comment }]);
            setNewReview({ rating: 0, comment: '' });
            setClickedStars(0);
        } else {
            alert('Please select a rating before adding a review.');
        }
    };

    return (
        <>
        <div className="product">
            <h3>{product.name}</h3>
            <img src={product.image} alt={product.name} />
            <div className="reviews">
                <h4>Customer Reviews</h4>
                <ul>
                    {reviews.map((review, index) => (
                        <li key={index}>
                            <StarRating rating={review.rating} />
                            <p>{review.comment}</p>
                        </li>
                    ))}
                </ul>
                <div className="add-review">
                    <StarRating
                        rating={clickedStars}
                        onStarClick={(rating) => setClickedStars(rating)}
                    />
                    <textarea
                        placeholder="Add your review..."
                        value={newReview.comment}
                        onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                    />
                
                        <Button variant="danger" onClick={handleAddReview}>
                            Add View
                        </Button>
                </div>
            </div>
        </div>

     
        </>
    );
};

export default Product;


import React from 'react';
import { FaStar } from 'react-icons/fa';
import "./css/Star.css";

const StarRating = ({ rating, onStarClick }) => {
    const totalStars = 5;

    return (
        <div className="star-rating">
            {Array.from({ length: totalStars }).map((_, index) => (
                <FaStar
                    key={index}
                    className={index < rating ? 'selected' : ''}
                    onClick={() => onStarClick(index+1 )}
                />
            ))}
        </div>
    );
};

export default StarRating;

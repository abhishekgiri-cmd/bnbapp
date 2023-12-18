import React, { useState } from 'react';
// import { db } from '../firebase';
import StarRating from './StarRating';
import "./rev.css"
const ReviewForm = () => {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !comment || !rating) {
            alert('Please fill in all fields and provide a rating.');
            return;
        }

        // await db.collection('reviews').add({
        //     name,
        //     comment,
        //     rating,
        //     timestamp: new Date(),
        // });

        setName('');
        setComment('');
        setRating(null);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <br />
            <label>
                Comment:
                <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
            </label>
            <br />
            <label>
                Rating:
                <StarRating onStarClick={setRating} rating={rating} />
            </label>
            <br />
            <button type="submit">Submit Review</button>
        </form>
    );
};

export default ReviewForm;

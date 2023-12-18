import React, { useState, useEffect } from 'react';
// import { db } from '../firebase';
import "./rev.css"


const ReviewList = () => {
    const [reviews, setReviews] = useState([]);

    // useEffect(() => {
    //     const unsubscribe = db.collection('reviews').onSnapshot((snapshot) => {
    //         const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    //         setReviews(data);
    //     });

    //     return () => unsubscribe();
    // }, []);

    return (
        <div>
            <h2>Reviews</h2>
            <ul>
                {reviews.map((review) => (
                    <li key={review.id}>
                        <strong>{review.name}:</strong> {review.comment}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ReviewList;

import React from 'react';
import './StarsRating.css';

function StarsRating({ item }) {
    
    const stars = {
        [item.name]: item.avgRating
    }

    for (let rating in stars) {
        const starPercentage = (stars[rating] / 5) * 100;

        const StarStyles = () => {
            return {
                width: starPercentage + '%'
            }
        }
        
        return (
            <div className="star-rating stars-outer">
                <div className="stars-inner" style={StarStyles()}>
                </div>
            </div>
        )
    }
    
}

export default StarsRating
